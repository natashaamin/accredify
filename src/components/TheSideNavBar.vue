<template>
  <nav class="nav-bar">
    <div class="nav-bar--icon">
      <img class="nav-bar--logo" alt="SPA logo" src="@/assets/svg/logo.svg" />
    </div>

    <div class="nav-bar--icon">
      <BaseIcon name="home" />
    </div>

    <div class="nav-bar--icon">
      <BaseIcon name="file" />
    </div>

    <div class="nav-bar--icon">
      <BaseIcon name="bulb" />
    </div>

    <div class="nav-bar--icon">
      <BaseIcon name="security" />
    </div>

    <div class="nav-bar--icon">
      <BaseIcon name="setting" />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIcon from "./BaseIcon.vue";

export default defineComponent({
  name: "TheSideNavBar",
  components: {
    BaseIcon,
  },
});
</script>

<style lang="scss">
@import "@/styles/variables";

.nav-bar {
  width: 60px;
  background-color: $neutral-n80;

  a {
    color: $neutral-n05;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
      transition: 0.4s;
    }
  }

  &--icon {
    width: 60px;
    height: 60px;
    display: grid;
    justify-content: center;
    align-content: center;
    color: white;

    &:first-of-type {
      margin: 8px 0 28px;
    }

    &:nth-child(2) {
      background-color: #353D4E;
    }

  }

  &--logo {
    width: 40px;
    height: 40px;
  }
}
</style>
