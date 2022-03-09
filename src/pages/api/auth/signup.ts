import { hashPassword } from "@Lib/auth"
import { connectToDatabase } from "@Lib/db"
import { User } from "@Server/models"
import { NextRequest, NextResponse } from "next/server"

async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return
  }

  const data = req.body

  const { email, password } = data

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    })
    return
  }

  connectToDatabase()

  // const db = client.db()

  const existingUser = await User.findOne({ email: email })

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" })

    return
  }

  const hashedPassword = await hashPassword(password)

  // const result = await User.insertOne({
  //   email: email,
  //   password: hashedPassword,
  // })

  res.status(201).json({ message: "Created user!" })
  // client.close()
}

export default handler
