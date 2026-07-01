import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'

describe('deploy workflow', () => {
  it('uses Node 20 and runs nuxt generate', () => {
    const workflow = readFileSync('.github/workflows/deploy.yml', 'utf-8')
    expect(workflow).toContain("node-version: '20'")
    expect(workflow).toContain('npm run generate')
  })
})
