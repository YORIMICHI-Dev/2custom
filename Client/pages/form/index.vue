<script setup lang="ts">
// definePageMeta({
//   middleware: ['home'],
// });

const TITLE = 'フォーム';
useHead({
  title: TITLE,
});

const breadcrumbs = ref([
  {
    text: 'ホーム',
    disabled: false,
    href: '/',
  },
  {
    text: TITLE,
    disabled: true,
    href: '/form',
  },
]);
</script>

<template>
  <!-- Breadcrumb -->
  <SharedBaseBreadCrumb :title="TITLE" :breadcrumbs="breadcrumbs" />
  <PageForm />
</template>
