#!/usr/bin/env node

import "./config/args.js"

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { getSentryEventMessage } from "./utils/getSentryEvent.js"
import { z } from "zod"

const server = new McpServer({
	name: "Sentry MCP Server",
	version: "2.1.0",
})

const toolName = "Get_Sentry_Event"
const toolDescription = `
Retrieves event information from Sentry


URL structure for paramsSchema
https://daangn.sentry.io/issues/:issueId/events/:eventId/


Example
https://daangn.sentry.io/issues/1234567890/events/1234567890/
issueId = 1234567890, eventId = 1234567890
`

server.tool(
	toolName,
	toolDescription,
	{ issueId: z.number(), eventId: z.string() },
	async ({ issueId, eventId }) => {
		const sentryEventMessage = await getSentryEventMessage(issueId, eventId)

		return {
			content: [sentryEventMessage],
		}
	},
)

async function main() {
	const transport = new StdioServerTransport()
	server.connect(transport)
}

main()
