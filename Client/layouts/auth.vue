<script setup lang="ts">
const setting = useSettingStore();
</script>

<template>
  <VApp :theme="setting.actTheme" :class="setting.actTheme">
    <slot />
  </VApp>
</template>
