


import crypto  from 'crypto'
import bcrypt from "bcryptjs"
import validator from "validator"
import mongoose from "mongoose"
import { loadModel } from '@Server/util';

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
    unique: [true, 'A user must have unique name'],
    trim: true,
    minlength: [3, 'A user name must be  above 2 characters!'],
    maxlength: [30, 'A user name must be below 31 charecters!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Provide a password'],
    minlength: [8, 'Password must be at least 8 charecters long'],
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    // this will only work with CREATE and SAVE
    validate: {
      validator: function(el:any) {
        return el === this.password as any;
      },
      message: "Password didn't match"
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});
userSchema.pre('save', async function(next) {
  // Only runs this function if password was actually modified
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  // Delete the password confim field
  // this will not persist the confirm password data in db
  this.passwordConfirm = undefined;
  next();
});
// Setting the passwordChangedAt
userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) {
    return next();
  }
  this.passwordChangedAt = Date.now() - 1000;
  next();
});
// Query Middle ware
userSchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});
// INSTANCE METHOD
// It is availble on all instance of the document of the collection
userSchema.methods.correctPassword = async function(
  candidatePassword:string,
  userPassword:string
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.changedPasswordAfter = function(JWTTimestamp:any) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000 as any,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  // False means not changed
  return false;
};
userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
export default loadModel("User", userSchema)
// export default  mongoose.model("User", userSchema)
