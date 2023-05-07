import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import GreetingSection from '@/components/GreetingSection.vue';

describe('GreetingSection component', () => {
  it('renders the name in the headline', () => {
    const wrapper = mount(GreetingSection, {
      props: {
        name: 'Alice',
        isPersonal: true,
      },
    });

    expect(wrapper.find('.greeting--headline').text()).toBe('Hi, Alice 👋');
  });

  it('displays the correct sub-headline when `isPersonal` is `true`', () => {
    const wrapper = mount(GreetingSection, {
      props: {
        name: 'Alice',
        isPersonal: true,
      },
    });

    expect(wrapper.find('.greeting--sub-headline').text()).toBe(
      'Manage your documents.'
    );
  });

  it('displays the correct sub-headline when `isPersonal` is `false`', () => {
    const wrapper = mount(GreetingSection, {
      props: {
        name: 'Alice',
        isPersonal: false,
      },
    });

    expect(wrapper.find('.greeting--sub-headline').text()).toBe(
      'Manage your documents issued by SMU Academy or track your career goal.'
    );
  });
});
