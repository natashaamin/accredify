<template>
  <div class="layout">
    <TheSideNavBar />
    <div class="main">
      <TheTopNavBar :name="user?.name" />
      <div class="content">
        <GreetingSection :name="user?.name" :is-personal="isPersonal" />

        <div class="content-container">
          <ManagedCareerGoal v-if="!isPersonal" />
          <RecentDocuments />
        </div>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheSideNavBar from "@/components/TheSideNavBar.vue";
import TheTopNavBar from "@/components/TheTopNavBar.vue";
import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
import { useStore } from "@/stores/store";
import GreetingSection from "@/components/GreetingSection.vue";
import ManagedCareerGoal from "@/components/ManagedCareerGoal.vue";
import RecentDocuments from "@/components/RecentDocuments.vue";
import { useRoute } from "vue-router";

const user = ref<any>(0);

export default defineComponent({
  name: "Home",
  components: {
    TheSideNavBar,
    TheTopNavBar,
    GreetingSection,
    ManagedCareerGoal,
    RecentDocuments,
  },
  setup() {
    const { $state, loadUser } = useStore();
    const loaded = ref(false);

    const route = useRoute();
    const isPersonal = computed(() => route.params.isPersonal === 'personal');

    onMounted(async () => {
      await loadUser();
      loaded.value = true;
    });

    watch(
      () => $state.user,
      (value) => {
        user.value = value;
      }
    );

    return {
      user: user,
      loaded,
      isPersonal
    };
  },
});
</script>

<style lang="scss">
.layout {
  display: flex;
  height: 100vh;
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      margin: 0px 144px 56px 144px;

      .content-container {
        display: flex;
        gap: 32px;
        margin-top: 56px;
      }
    }
  }
}
</style>
