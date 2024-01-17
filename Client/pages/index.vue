<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});

const TITLE = 'まとめカスタマイズ';
useHead({
  title: TITLE,
});
</script>

<template>
  <PageHome />
</template>
