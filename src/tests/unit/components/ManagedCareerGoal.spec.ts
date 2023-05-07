import { flushPromises, mount, shallowMount } from "@vue/test-utils";
import ProgressBar from "@/components/ProgressBar.vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import ManagedCareerGoalVue from "@/components/ManagedCareerGoal.vue";
import { Type } from "@/assets/types/type";

describe("CareerGoal component", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("renders properly when loaded", async () => {
    const mockData = {
      data: [
        {
          id: 1,
          name: "Account Manager",
          description:
            "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
          category: "Sales and Marketing",
          type: Type.CORE, // or "core"
          progress: 35, // integer ranging from 0 to 100
        },
      ],
    };

    const wrapper = shallowMount(ManagedCareerGoalVue, {
      global: {
        stubs: {
          ProgressBar: true,
          Loading: true,
        },
      },
    });

    wrapper.vm.loaded = true;

    await wrapper.vm.$nextTick();

    if (wrapper.vm.career) {
      wrapper.vm.career = mockData.data;

      await flushPromises();
      expect(wrapper.exists()).toBe(true);

      expect(wrapper.find("h4").text()).toBe("Career Goal");
      expect(wrapper.find(".career-goal--header").text()).toBe("Your Progress");
      expect(wrapper.findComponent(ProgressBar).props("progress")).toBe(35);
      expect(wrapper.find(".career-goal--title").text()).toBe(
        "I want to become a"
      );
      expect(wrapper.find(".career-goal-details h4").text()).toBe("Account Manager");
      expect(wrapper.find(".career-goal--link").text()).toBe("View Insights");
    }
  });
});
