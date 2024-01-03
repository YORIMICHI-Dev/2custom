<script setup lang="ts">
// definePageMeta({
//   middleware: ['home'],
// });

const TITLE = '設定';
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
    href: '/setting',
  },
]);
</script>

<template>
  <!-- Breadcrumb -->
  <SharedBaseBreadCrumb :title="TITLE" :breadcrumbs="breadcrumbs" />

</template>
