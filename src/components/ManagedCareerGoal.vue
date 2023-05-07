<template>
  <div class="career-goal">
    <h4>Career Goal</h4>

    <div class="career-goal--wrapper">
      <template v-if="loaded">
        <div class="career-goal--header">Your Progress</div>
        <ProgressBar :progress="35"/>
        <div class="career-goal-details">
          <span class="career-goal--title">I want to become a</span>
          <h4>{{ career?.[0]?.name }}</h4>
        </div>
        <div class="career-goal--link">View Insights</div>
      </template>
      <template v-else>
        <Loading/>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/stores/store";
import { defineComponent, onMounted, ref, watch } from "vue";
import ProgressBar from "./ProgressBar.vue";
import { ICareer } from "@/assets/types/type";
import Loading from "@/components/LoadingComponent.vue";

const career = ref<ICareer[]>([]);

export default defineComponent({
  name: "CareerGoal",
  components: {
    ProgressBar,
    Loading
  },
  setup() {
    const { $state, loadCareer } = useStore();
    const loaded = ref(false);

    onMounted(async () => {
      await loadCareer();
      loaded.value = true;
    });

    watch(
      () => $state.career,
      (value: any) => {
        career.value = value;
      }
    );

    return {
      career: career,
      loaded,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins";

h4 {
    margin: 0%;
}

.career-goal {
  min-width: 260px;
}

.career-goal--wrapper {
  border: 1px solid $neutral-n30;
  margin-top: 16px;
  padding: 32px 20px;
  border-radius: 6px;
  font-size: $font-size-small;
  text-align: center;
}

.career-goal--header {
  margin-bottom: 24px;
  @include h6;
}

.career-goal-details {
    margin: 24px 40px 24px 40px;
}

.career-goal--link {
  @include links;
}

.career-goal--title {
    font-size: $font-size-small;
    font-weight: $font-weight-normal;
    line-height: $line-height-small;
}

.career-goal--error {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>
