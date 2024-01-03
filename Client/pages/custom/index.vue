<script setup lang="ts">
// definePageMeta({
//   middleware: ['home'],
// });

const TITLE = 'カスタム';
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
    href: '/custom',
  },
]);
</script>

<template>
  <!-- Breadcrumb -->
  <SharedBaseBreadCrumb :title="TITLE" :breadcrumbs="breadcrumbs" />

</template>

