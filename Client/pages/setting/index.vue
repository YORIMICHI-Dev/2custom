<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});

const TITLE = 'ユーザー設定';
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

  <PageSetting />
</template>
