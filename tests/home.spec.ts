import { describe, expect, it } from 'vitest'
import { useLocalePath } from '../composables/useLocalePath'

describe('locale path helper', () => {
  it('maps zh and en home routes correctly', () => {
    expect(useLocalePath('zh', '/projects')).toBe('/projects')
    expect(useLocalePath('en', '/projects')).toBe('/en/projects')
  })
})
