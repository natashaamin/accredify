import { mount } from '@vue/test-utils'
import { expect, test, describe } from "vitest";
import TheTopNavBar from '@/components/TheTopNavBar.vue'

describe('TheTopNavBar.vue', () => {
  test('renders the correct initials and name', async () => {
    const name = 'John Doe'
    const wrapper = mount(TheTopNavBar, {
      props: {
        name
      }
    })

    // Check that initials are rendered correctly
    const initials = wrapper.find('.top-nav-bar--initials')
    expect(initials.text()).toEqual('JD')

    // Check that name is rendered correctly
    const username = wrapper.find('.top-nav-bar--username')
    expect(username.text()).toEqual(name)
  })
})
