import { shallowMount } from '@vue/test-utils';
import { expect, test, describe } from "vitest";
import TheSideNavBar from '@/components/TheSideNavBar.vue';

describe('TheSideNavBar.vue', () => {
    test('renders the correct number of BaseIcon components', () => {
    const wrapper = shallowMount(TheSideNavBar);
    expect(wrapper.findAllComponents({ name: 'BaseIcon' }).length).toBe(5);
  });

  test('renders the logo with the correct alt text', () => {
    const wrapper = shallowMount(TheSideNavBar);
    const logo = wrapper.find('.nav-bar--logo');
    expect(logo.exists()).toBe(true);
    expect(logo.attributes('alt')).toBe('SPA logo');
  });
});
