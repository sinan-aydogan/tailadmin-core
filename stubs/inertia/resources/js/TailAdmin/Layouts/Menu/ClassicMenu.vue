<script setup>
// Main Functions
import { watch, ref } from "vue"
import { storeToRefs } from "pinia"

// Components
import ClassicMenuLinkComponent from "@/TailAdmin/Layouts/Menu/ClassicMenuLinkComponent.vue";

//Menu Status
import { useMenuStore } from '@/TailAdmin/Stores/menuStore.js'
const menuStore = useMenuStore()
const { menuStatus,activeLinks } = storeToRefs(menuStore)

// Menu Styles
import { useConfigStore } from "@/Stores/tailadminConfigStore";
const configStore = useConfigStore();
const { app, styles } = storeToRefs(configStore)

// Breakpoint Tracker
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const isSmaller = ref('')

// Event Listener: Resize
import { useEventListener } from "@vueuse/core";
useEventListener(window, "resize", (evt) => {
  isSmaller.value = breakpoints.isSmaller("sm")
});

watch(() => isSmaller.value, (newValue, oldValue) => {
  // If the menu status show when screen size going to smaller size
  if (!oldValue && newValue) {
    menuStatus.value = 'hidden'
  }

  if (oldValue && !newValue) {
    menuStatus.value = 'mini'
  }
})

defineProps({
  data: {
    type: Array,
    default: () => { }
  },
  modelValue: String
})
</script>

<template>
  <aside class="flex flex-col flex-shrink-0 transition-all duration-500" :class="[
        {
            'w-20': modelValue === 'mini',
            'w-64 ml-0': modelValue === 'show',
            '-ml-64 w-64': modelValue === 'hidden'
        },
        styles.sideMenu.classic.wrapper
    ]">
    <!-- Logo -->
    <span v-text="menuStatus === 'show' ? app.name : app.shortName" :class="styles.sideMenu.classic.textLogo" />

    <!-- Menu -->
    <nav :class="styles.sideMenu.classic.linksWrapper">
      <!-- Root Link -->
      <template v-for="rootLink in data" :key="rootLink.id">
        <classic-menu-link-component :data="rootLink" />
      </template>
    </nav>

  </aside>
</template>
