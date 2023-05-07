<template>
  <div class="document-wrapper">
    <div class="document--header">
      <h4>Recent Documents</h4>
      <div class="document--view-all">View All Documents</div>
    </div>

    <div v-if="loaded" class="document-list">
      <div class="document-list--column">
        <span class="document-list--name">Document Name</span>
        <span class="document-list--date">Received On</span>
        <span class="document-list--operation"></span>
      </div>
      <div
        v-for="doc in documents?.data"
        :key="doc['id']"
        class="document-list--row"
      >
        <div class="document-list--name">
          <BaseIcon name="file" class="document-list--row--file" />
          <div class="document-list--document-name">
            {{ doc["document_name"] }}
          </div>
        </div>
        <div class="document-list--date">
          {{ formattedDate(doc["received_on"]) }}
        </div>
        <div class="document-list--operation">
          <BaseIcon name="kebab" class="document-list--row--kebab" />
        </div>
      </div>
    </div>

    <div v-if="!loaded" class="document-list">
      <Loading />
    </div>
  </div>
</template>

<script lang="ts">
import { IDocument } from "@/assets/types/type";
import { useStore } from "@/stores/store";
import { formattedDate } from "@/utils/util";
import { ref, defineComponent, onMounted, watch } from "vue";
import BaseIcon from "./BaseIcon.vue";
import Loading from "@/components/LoadingComponent.vue";

const documents = ref<IDocument>();

export default defineComponent({
  name: "DocumentList",
  components: { BaseIcon, Loading },
  setup() {
    const { $state, loadDocument } = useStore();
    const loaded = ref(false);

    onMounted(async () => {
      await loadDocument();
      loaded.value = true;
    });

    watch(
      () => $state.document,
      (value: any) => {
        documents.value = value;
      }
    );

    return {
      documents: documents,
      loaded,
      formattedDate,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins";

span {
  @include h6;
}

.document-wrapper {
  width: 100%;
}

.document--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.document-list--column {
  display: grid;
  grid-template-columns: auto 116px 56px; // adjust column widths as needed
  grid-gap: 10px;
  align-items: center;
  border-bottom: 1px solid $neutral-n30;
  padding: 20px;
}

.document--view-all {
  margin-left: auto;
  @include links;
}

.document-list {
  border: 1px solid $neutral-n30;
  margin-top: 16px;
  padding: 32px 24px;
  border-radius: 6px;
  font-size: $font-size-small;

  &--name {
    display: flex;
  }

  &--date {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--operation {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
}

.document-list--row {
  display: grid;
  grid-template-columns: auto 116px 56px; // adjust column widths as needed
  grid-gap: 10px;
  align-items: center;
  border-bottom: 1px solid $neutral-n30;
  padding: 20px;

  &--file {
    color: $primary-p50;
    padding-right: 20px;
  }

  &--kebab {
    color: $neutral-n60;
    padding-left: 16px;
  }
}

.document-list--file-icon {
  margin-right: 20px;
  color: var(--color-background-user-initials);
}
.document-list--kebab-icon {
  color: var(--color-text-light);
  margin-left: 32px;
  min-width: 24px;
}
.document-list--error {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>
