<script setup>
// Components
import TIconBars from "@/TailAdmin/Components/Icons/TIconBars.vue";
import THeaderWidget from "@/TailAdmin/Layouts/Header/THeaderWidget.vue";
import TTeamsWidget from "@/TailAdmin/Layouts/Header/TTeamsWidget.vue";
import TThemeWidget from "@/TailAdmin/Layouts/Header/TThemeWidget.vue";
import TLanguageWidget from "@/TailAdmin/Layouts/Header/TLanguageWidget.vue";
import TUserMenuWidget from "@/TailAdmin/Layouts/Header/TUserMenuWidget.vue";
import TSearchWidget from "@/TailAdmin/Layouts/Header/TSearchWidget.vue";

//Stores
import {useMenuStore} from '@/TailAdmin/Stores/menuStore.js'

defineProps({
  headerTexts: Object
})

const menuStore = useMenuStore();
</script>

<template>
  <div class="flex flex-col">
    <!--Top Bar-->
    <div class="flex justify-between px-6 h-16">
      <!--Left Side-->
      <div class="flex items-center space-x-4">
        <!--Menu Toggle-->
        <t-icon-bars @click="menuStore.toggle()" class="h-8 w-8 shrink-0 cursor-pointer hover:scale-105 active:scale-95 transition"/>
        <!--Search-->
        <t-search-widget/>
        <!--Teams Widget-->
        <t-teams-widget/>
        <!--Top Bar Slot-->
        <div v-if="$slots['top-bar']">
          <slot name="top-bar"/>
        </div>
      </div>
      <!--Right Side-->
      <div class="flex items-center space-x-4">
        <!--Theme Widget-->
        <t-theme-widget/>
        <!--Language Widget-->
        <t-language-widget/>
        <!--User Menu-->
        <t-user-menu-widget/>
      </div>
    </div>
    <!--Header-->
    <t-header-widget :headerTexts="headerTexts">
      <!--Header Slot-->
      <template #header>
        <slot name="header"/>
      </template>
      <!--Actions Slot-->
      <template #actions>
        <slot name="actions"/>
      </template>
    </t-header-widget>
  </div>
</template>