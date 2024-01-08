<script setup lang="ts">
// definePageMeta({
//   middleware: ['home'],
// });

const TITLE = 'お知らせ';
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
  <PageNotification />
</template>
