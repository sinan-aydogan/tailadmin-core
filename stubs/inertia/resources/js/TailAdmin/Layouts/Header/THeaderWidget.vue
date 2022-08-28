<script setup>
defineProps({
  headerTexts: Object
})
</script>

<template>
  <header>
    <!--Header Content-->
    <div class="p-4 shadow-lg">
      <!--Header Slot-->
      <div v-if="$slots.header">
        <slot name="header"/>
      </div>
      <!--Header Texts-->
      <div class="flex flex-col">
        <span v-if="headerTexts.header" v-text="headerTexts.header" class="text-2xl font-semibold text-slate-700"/>
        <span v-if="headerTexts.subHeader" v-text="headerTexts.subHeader" class="text-sm leading-none text-slate-500"/>
      </div>
    </div>

    <!--Actions Slot-->
    <div v-if="$slots.actions">
      <slot name="actions"/>
    </div>
  </header>
</template>
