import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'

describe('content contract', () => {
  it('contains mirrored zh and en homepage content', () => {
    const zh = readFileSync('content/zh/home.md', 'utf-8')
    const en = readFileSync('content/en/home.md', 'utf-8')

    expect(zh).toContain('quickFacts:')
    expect(en).toContain('quickFacts:')
    expect(zh).toContain('socialLinks:')
    expect(en).toContain('socialLinks:')
  })
})
