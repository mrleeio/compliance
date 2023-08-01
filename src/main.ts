import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    // eslint-disable-next-line no-console
    console.log(`The event payload: ${payload}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
