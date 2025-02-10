import { WebClient } from "@slack/web-api"
const slackapi = new WebClient (process.env.SLACKAPITOKEN)
export async function POST (request:Request) {
    const data = await request.json ()
    console.log (data)
    await slackapi.chat.postMessage ({channel: "C08BDLKGBA7", text: data.message})
    console.log ("API used")
}