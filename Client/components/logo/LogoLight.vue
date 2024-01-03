<script setup lang="ts">
const sidebar = useSidebarStore();
</script>

<template>
  <div class="logo">
    <NuxtLink to="/" class="d-flex gap-2 text-inherits">
      <img width="24" src="/images/logo/icon.svg" />
      <img
        v-if="!sidebar.miniSidebar"
        width="180"
        src="/images/logo/title_w.svg"
      />
    </NuxtLink>
  </div>
</template>
