<template>
  <div class="top-nav-bar">
    <div class="top-nav-bar--content">
      <BaseIcon name="bell" class="top-nav-bar--bell-icon" />
      <div class="top-nav-bar--initials">
        {{ getInitials }}
      </div>
      <div class="top-nav-bar--username">
        {{ name }}
      </div>
      <BaseIcon name="chevron" class="top-nav-bar--chevron" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "./BaseIcon.vue";

export default defineComponent({
  name: "TheTopNavBar",
  props: {
    name: {
      type: String as PropType<string>,
      default: "",
    },
  },
  components: {
    BaseIcon,
  },
  computed: {
    getInitials() {
      const parts = this.name.split(" ");
      let initials = "";
      for (let i = 0; i < parts.length; i++) {
        initials += parts[i][0];
      }
      return initials.toUpperCase();
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/variables";

.top-nav-bar {
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 1px solid $neutral-n30;
  font-size: $font-size-small;
}
.top-nav-bar--content {
  display: flex;
  align-items: center;
  margin-right: 32px;
}
.top-nav-bar--initials {
  background-color: $primary-p50;
  border-radius: 50%;
  color: $neutral-n05;
  font-size: $font-size-tiny;
  padding: 2px;
  text-align: center;
  width: 24px;
  height: 24px;
  display: grid;
  align-content: center;
}
.top-nav-bar--username {
  margin: 0 8px;
}
.top-nav-bar--bell-icon {
  margin-right: 35px;
}
</style>
