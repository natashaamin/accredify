<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import IconHome from "@/components/icons/icon-home.vue";
import IconFile from "@/components/icons/icon-file.vue";
import IconBulb from "@/components/icons/icon-bulb.vue";
import IconSecurity from "@/components/icons/icon-security.vue";
import IconSetting from "@/components/icons/icon-setting.vue";
import IconChevron from "@/components/icons/icon-chevron.vue";
import IconBell from "./icons/icon-bell.vue";
import IconKebab from "./icons/icon-kebab.vue";

interface IconMap {
  [key: string]: any;
}

const icons: IconMap = {
  home: IconHome,
  file: IconFile,
  bulb: IconBulb,
  security: IconSecurity,
  setting: IconSetting,
  chevron: IconChevron,
  bell: IconBell,
  kebab: IconKebab
};

export default defineComponent({
  name: "Icon",
  props: {
    name: {
      type: String as PropType<keyof IconMap>,
      required: true,
      validator(value: string) {
        return Object.prototype.hasOwnProperty.call(icons, value);
      },
    },
  },
  computed: {
    iconComponent(): any {
      return icons[this.name];
    },
  },
});
</script>
