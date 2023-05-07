<template>
  <div class="greeting">
    <h2 class="greeting--headline">Hi, {{ name }} 👋</h2>
    <div v-if="isPersonal" class="greeting--sub-headline">
      Manage your documents.
    </div>
    <div v-else class="greeting--sub-headline">
      Manage your documents issued by SMU Academy or track your career goal.
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
  name: "GreetingSection",
  props: {
    name: {
      type: String as PropType<string>,
      default: "",
    },
    isPersonal: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins";

.greeting--headline {
  @include h2;
}

.greeting--sub-headline {
  margin-top: 8px;
  @include p;
}

</style>
