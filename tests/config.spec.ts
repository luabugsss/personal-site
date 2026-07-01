import { describe, expect, it } from 'vitest'
import { loadConfig } from 'c12'

describe('nuxt static config', () => {
  it('enables static output and route-safe base configuration', async () => {
    const { config } = await loadConfig({
      cwd: process.cwd(),
      name: 'nuxt'
    })

    expect(config.ssr).toBe(true)
    expect(config.nitro?.preset).toBe('github_pages')
    expect(config.app?.baseURL).toBe(process.env.NUXT_APP_BASE_URL || '/')
  })
})
