<script setup>
//Main functions
import { defineAsyncComponent, ref, watch } from "vue";
import { storeToRefs } from "pinia"

//Sources
import Menu from "@/Sources/Menu.js"

//Stores
import { useConfigStore } from "@/Stores/tailadminConfigStore";
import { useMenuStore } from '@/TailAdmin/Stores/menuStore.js'

// Settings
const configStore = useConfigStore();
const { layout } = storeToRefs(configStore)

// Menu Links
const { menuLinks } = Menu()

const menu = defineAsyncComponent(() => {
  return import(`./Menu/${layout.value.menuType}.vue`)
});

//Menu Toggle Funtion
const menuStore = useMenuStore()
const { menuStatus } = storeToRefs(menuStore)
</script>

<template>
  <component :is="menu" :data="menuLinks" v-model="menuStatus" />
</template>
