import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    // Write code here
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
