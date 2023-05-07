<template>
  <div class="loading-container">
    <div class="loading-spinner"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: {
    size: {
      type: Number,
      default: 48,
    },
    color: {
      type: String,
      default: "#1E90FF",
    },
  },
  computed: {
    spinnerSize(): string {
      return `${this.size}px`;
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/variables";

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 4px solid rgba($primary-p50, 0.2);
  border-top-color: $primary-p50;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
