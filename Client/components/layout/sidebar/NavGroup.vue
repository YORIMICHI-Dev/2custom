<script setup lang="ts">
const props = defineProps<{
  item: any;
}>();
</script>

<template>
  <VListSubheader color="darkText" class="smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold">
    <span class="mini-icon">
      <DotsIcon size="16" stroke-width="1.5" class="itemClass" />
    </span>
    <span class="mini-text">{{ props.item.header }}</span>
  </VListSubheader>
</template>
