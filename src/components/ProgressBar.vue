<template>
  <div class="progress-bar-container">
    <svg :width="size" :height="size">
      <circle
        class="progress-bar-background"
        :r="radius"
        :cx="center"
        :cy="center"
        :stroke-width="strokeWidth"
      />
      <circle
        class="progress-bar"
        :r="radius"
        :cx="center"
        :cy="center"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        :stroke-width="strokeWidth"
        :style="`transition: stroke-dashoffset ${transitionDuration}ms linear; stroke: ${color}; z-index: 2;`"
      />
    </svg>
    <div class="progress-text">{{ progress }}%</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    progress: {
      type: Number,
      required: true,
      validator: (v: number) => v >= 0 && v <= 100,
    },
    size: {
      type: Number,
      default: 120,
    },
    strokeWidth: {
      type: Number,
      default: 8,
    },
    color: {
      type: String,
      default: "#493DF5",
    },
    transitionDuration: {
      type: Number,
      default: 1000,
    },
  },
  setup(props) {
    const radius = ref((props.size - props.strokeWidth) / 2);
    const center = ref(props.size / 2);
    const circumference = ref(2 * Math.PI * radius.value);
    const offset = ref(
      circumference.value - (props.progress / 100) * circumference.value
    );

    watch(
      () => props.progress,
      (newValue) => {
        offset.value =
          circumference.value - (newValue / 100) * circumference.value;
      }
    );

    return {
      radius,
      center,
      circumference,
      offset,
    };
  },
});
</script>

<style scoped>
.progress-bar-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-bar-background {
  fill: none;
  stroke: #d0d2d6;
}

.progress-bar {
  fill: none;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center center;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #007aff;
}
</style>
