import { args } from "../config/args.js"

export async function getSentryEventMessage(issueId: number, eventId: string) {
  const url = `https://sentry.io/api/0/organizations/${args.SENTRY_ORG_ID}/issues/${issueId}/events/${eventId}/`

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
