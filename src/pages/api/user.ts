import type { NextApiHandler } from "next"

const userHandler: NextApiHandler = async (request, response) => {
  const { amount = 1 } = request.body

  // simulate IO latency
  await new Promise(resolve => setTimeout(resolve, 500))

  response.json({
    data: {
      name: "Omer E",
      status: "Admin Cook",
      _id: 1,
      role: "admin",
    },
  })
}

export default userHandler
