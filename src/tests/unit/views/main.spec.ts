import { describe, beforeEach, expect, it } from "vitest";
import TheSideNavBar from "@/components/TheSideNavBar.vue";
import TheTopNavBar from "@/components/TheTopNavBar.vue";
import GreetingSection from "@/components/GreetingSection.vue";
import ManagedCareerGoal from "@/components/ManagedCareerGoal.vue";
import RecentDocuments from "@/components/RecentDocuments.vue";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("renders the component properly", async () => {
    const mockRoute = {
      params: {
        isPersonal: "personal",
      },
    };

    const mockUser = {
      data: {
        id: 1,
        name: "John Smith",
        email: "john.smith@example.com",
        profile_picture_url: "https://placehold.co/600x400.png",
        email_verified_at: "2022-01-01 15:38:33.0 Asia/Singapore (+08:00)",
        identification_number: "S9****567A",
        current_organisation: {
          id: 2,
          name: "Sample Bank ABC",
          logo_url: "https://placehold.co/600x400.png",
          is_personal: false, // true if Personal User
        },
      },
    };

    const wrapper = shallowMount(Home, {
      global: {
        stubs: {
          RouterLink: true,
          TheSideNavBar: true,
          TheTopNavBar: true,
          GreetingSection: true,
          ManagedCareerGoal: true,
          RecentDocuments: true,
        },
        mocks: {
          $route: mockRoute,
          user: mockUser.data,
        },
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isPersonal).toBe(true);
    expect(wrapper.findComponent(TheSideNavBar).exists()).toBe(true);
    expect(wrapper.findComponent(TheTopNavBar).props("name")).toBe(
      wrapper.vm.user.name
    );
    expect(wrapper.findComponent(GreetingSection).props("name")).toBe(
        wrapper.vm.user.name
    );
    expect(wrapper.findComponent(ManagedCareerGoal).exists()).toBe(true);
    expect(wrapper.findComponent(RecentDocuments).exists()).toBe(true);
  });
});
