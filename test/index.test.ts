import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import index from '../app/pages/index.vue'

describe('index page', () => {
  it('renders the hero heading', async () => {
    const component = await mountSuspended(index)
    expect(component.text()).toContain('Nuxt Starter Template')
  })

  it('renders the features section', async () => {
    const component = await mountSuspended(index)
    expect(component.text()).toContain('A full-stack foundation for modern Vue apps')
  })
})
