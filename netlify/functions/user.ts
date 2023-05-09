import { type Handler, type HandlerEvent, type HandlerContext } from '@netlify/functions'

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        data: {
          id: 1,
          name: "John Smith",
          email: "john.smith@example.com",
          profile_picture_url: "https://placehold.co/600x400.png",
          email_verified_at: "2022-01-01 15:38:33.0 Asia/Singapore (+08:00)",
          identification_number: "S9****567A",
          current_organisation: {
            id: 2,
            name: "Sample Bank ABC",
            logo_url: "https://placehold.co/600x400.png",
            is_personal: false, // true if Personal User
          },
        },
      })
  }

}

export { handler }