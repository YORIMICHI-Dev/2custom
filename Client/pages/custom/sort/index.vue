<script setup lang="ts">
// definePageMeta({
//   middleware: ['home'],
// });

const TITLE = '並べ替え';
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
    text: 'カスタム',
    disabled: true,
    href: '/custom',
  },
  {
    text: TITLE,
    disabled: true,
    href: '/custom',
  },
]);
</script>

<template>
  <!-- Breadcrumb -->
  <SharedBaseBreadCrumb :title="TITLE" :breadcrumbs="breadcrumbs" />

  <PageCustomSort />
</template>
