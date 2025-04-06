import "./config/args"

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { getSentryEventMessage } from "./utils/getSentryEvent"
import { z } from "zod"

const server = new McpServer({
	name: "Sentry MCP Server",
	version: "1.0.0",
})

server.tool(
	"Get Sentry Event",
	"Retrieves event information from Sentry",
	{ eventId: z.string() }, async ({ eventId }) => {
  const sentryEventMessage = await getSentryEventMessage(eventId)

  return {
    content: [sentryEventMessage],
  }
})

async function main() {
	const transport = new StdioServerTransport()
	server.connect(transport)
}

main()
