import { program } from "commander"

program
  .option("--SENTRY_ORG_ID <number>")
  .option("--SENTRY_API_TOKEN <string>")

program.parse()

interface Args {
  SENTRY_ORG_ID: string
  SENTRY_API_TOKEN: string
}

export const args = program.opts<Args>()
