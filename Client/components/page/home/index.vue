<script setup lang="ts">
const setting = useSettingStore();
</script>

<template>
  <VRow class="justify-center ma-n2">
    <VCol cols="12" md="10">
      <PageHomeRadioView />

      <PageHomeSingleView v-if="setting.format === 'list'" />
      <PageHomeGatherView v-else-if="setting.format === 'gather'" />
    </VCol>
  </VRow>
</template>
