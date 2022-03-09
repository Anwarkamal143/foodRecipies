import { connect, connection, connections } from "mongoose"

export async function connectToDatabase() {
  const client = await connect(process.env.DATABASE_URL)

  return client
}
export async function closeConnection() {
  if (connection.readyState === 1) {
    return connection
  }
  return await connect(process.env.DATABASE_URL)
}
