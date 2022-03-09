import { closeConnection, connectToDatabase } from "@Lib/db"
import { User } from "@Server/models"
import { compare } from "bcryptjs"
import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import CredentialsProvider from "next-auth/providers/credentials"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),

    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET || '',
    // }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: {
    //     appleId: process.env.APPLE_ID,
    //     teamId: process.env.APPLE_TEAM_ID,
    //     privateKey: process.env.APPLE_PRIVATE_KEY,
    //     keyId: process.env.APPLE_KEY_ID,
    //   },
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // console.log({ credentials })
        //Connect to DB
        // const client = await MongoClient.connect(
        //   `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.n4tnm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
        //   { useNewUrlParser: true, useUnifiedTopology: true }
        // )
        connectToDatabase()
        //Get all the users

        //Find user with the email
        const result = await User.findOne({
          email: credentials?.email,
        })
        // console.log({ result })
        //Not found - send error res
        if (!result) {
          closeConnection()
          // client.close()
          throw new Error("No user found with the email")
        }
        //Check hased password with DB password
        const checkPassword = await compare(
          credentials.passowrd,
          result.passowrd
        )
        //Incorrect password - send response
        if (!checkPassword) {
          closeConnection()
          // client.close()
          throw new Error("Password doesnt match")
        }
        //Else send success response
        closeConnection()
        // client.close()
        return { email: result.email }
      },
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      // @ts-ignore
      domain: process.env.AUTH0_DOMAIN,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      // @ts-ignore
      scope: "read:user",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: "/auth/signin", // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    // async redirect({ url, baseUrl }) { return baseUrl },
    // async session({ session, token, user }) { return session },
    // async jwt({ token, user, account, profile, isNewUser }) { return token }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false,
})
