import { args } from "../config/args.js"

export async function getSentryEventMessage(eventId: string) {
  const url = `https://sentry.io/api/0/projects/${args.SENTRY_ORG_ID}/${args.SENTRY_PROJECT_ID}/events/${eventId}/`

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${args.SENTRY_API_TOKEN}`,
    },
  })

  const json = await response.json()

  return toMessage(json)
}

function toMessage(event: Record<string, unknown>): { type: "text", text: string } {
  const eventJson = {
    title: event.title,
    location: event.location,
    contexts: event.entries,
  }

  return {
    type: "text",
    text: [
      "Sentry Event Information",
      "",
      "```",
      JSON.stringify(eventJson, null, 2),
      "```",
    ].join("\n")
  }
}
