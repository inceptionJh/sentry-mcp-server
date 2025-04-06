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
        "sentry-mcp-server",
        "--SENTRY_ORG_ID=ORG_ID",
        "--SENTRY_PROJECT_ID=PROJECT_ID",
        "--SENTRY_API_TOKEN=API_TOKEN"
      ]
    }
  }
}
```
