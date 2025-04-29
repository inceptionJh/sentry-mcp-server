<div align="center">
  <h1>Sentry MCP Server</h1>
</div>

<br/>



## Getting Started

[cursor mcp setting](https://docs.cursor.com/context/model-context-protocol#configuring-mcp-servers)

> MacOS / Linux

```json
{
  "mcpServers": {
    "sentry": {
      "command": "npx",
      "args": [
        "-y",
        "@jaejae-json/sentry-mcp-server",
        "--SENTRY_ORG_ID=00000",
        "--SENTRY_API_TOKEN=sntryu_**********************"
      ]
    }
  }
}
```

## Tools List
**Get_Sentry_Event**
```
Retrieves event information from Sentry


URL structure for paramsSchema
https://organization.sentry.io/issues/:issueId/events/:eventId/


Example
https://organization.sentry.io/issues/1234567890/events/1234567890/
issueId = 1234567890, eventId = 1234567890
```
