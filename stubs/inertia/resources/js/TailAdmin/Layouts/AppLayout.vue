<script setup>
//Main Functions
import {computed} from "vue"
import { Head } from '@inertiajs/inertia-vue3';

//Components
import TSideMenuComponent from "@/TailAdmin/Layouts/TSideMenuComponent.vue"
import THeaderComponent from "@/TailAdmin/Layouts/THeaderComponent.vue"
import TFooterComponent from "@/TailAdmin/Layouts/TFooterComponent.vue"
import TContentComponent from "@/TailAdmin/Layouts/TContentComponent.vue"

const props = defineProps({
  browserTitle: {
    type: String,
    default: ''
  },
  header: {
    type: String,
    default: ''
  },
  subHeader: {
    type: String,
    default: ''
  },
})

//Header
const headerTexts = computed(() => {
  return {
    header: props.header,
    subHeader: props.subHeader,
  }
})
</script>

<template>
  <div class="h-screen w-screen flex overflow-hidden">
    <Head :title="browserTitle ? browserTitle : header"/>

    <!--Side Bar-->
    <t-side-menu-component/>

    <!--Content Area-->
    <div class="flex flex-col h-full w-full">
      <!--Header-->
      <t-header-component :headerTexts="headerTexts">
        <!--Top Slot-->
        <template #top-bar>
          <slot name="top-bar"/>
        </template>
        <!--Header Slot-->
        <template #header>
          <slot name="header"/>
        </template>
        <!--Actions Slot-->
        <template #actions>
          <slot name="actions"/>
        </template>
      </t-header-component>

      <!--Content-->
      <t-content-component>
        <template #default>
          <slot/>
        </template>
      </t-content-component>

      <!--Footer-->
      <t-footer-component/>
    </div>
  </div>
</template>