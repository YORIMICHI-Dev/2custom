<script setup lang="ts">
const setting = useSettingStore();
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
</script>

<template>
  <VBtn
    v-if="setting.scrollButton"
    class="customizer-btn"
    size="large"
    icon
    variant="flat"
    color="secondary"
    @click.stop="scrollTop"
  >
    <ArrowBigUpLineIcon />
  </VBtn>
</template>
