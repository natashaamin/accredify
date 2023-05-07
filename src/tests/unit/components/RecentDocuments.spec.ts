import { flushPromises, mount, shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import DocumentList from "@/components/RecentDocuments.vue";

describe("DocumentList", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  test("renders document list", async () => {
    const wrapper = shallowMount(DocumentList);

    // Mock document data
    const mockDocument = [
      {
        id: 1,
        status: "string",
        document_name: "string",
        issuer_name: "string",
        issuer_logo_url: "string",
        recipient_name: "string",
        received_on: "string",
        expire_at: "string",
        created_at: "string",
        updated_at: "string",
        achieved_at: "string",
        deleted_at: "string",
      },
    ];

    await wrapper.vm.$nextTick();
    if (wrapper.vm.documents) {
      wrapper.vm.documents.data = mockDocument;
      await flushPromises();

      // Check if the component renders
      expect(wrapper.exists()).toBe(true);

      const documentRows = wrapper.findAll(".document-list--row");

      expect(documentRows.length).toBe(3);
      expect(documentRows[1].find(".document-list--name").text()).toEqual(
        mockDocument[0].document_name
      );
    }
  });
});
