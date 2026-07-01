import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'

describe('route files', () => {
  it('includes bilingual project and writing detail routes', () => {
    expect(existsSync('pages/projects/[slug].vue')).toBe(true)
    expect(existsSync('pages/en/projects/[slug].vue')).toBe(true)
    expect(existsSync('pages/writing/[slug].vue')).toBe(true)
    expect(existsSync('pages/en/writing/[slug].vue')).toBe(true)
  })
})
