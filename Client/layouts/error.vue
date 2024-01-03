<script setup lang="ts">
const setting = useSettingStore();
</script>

<template>
  <v-app :theme="setting.actTheme">
    <NuxtPage />
  </v-app>
</template>
