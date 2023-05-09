import { type Handler, type HandlerEvent, type HandlerContext } from '@netlify/functions'

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        data: [
          {
            id: 1,
            name: "Account Manager",
            description:
              "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
            category: "Sales and Marketing",
            type: "technical", // or "core"
            progress: 35, // integer ranging from 0 to 100
          },
        ],
      })
  }

}

export { handler }