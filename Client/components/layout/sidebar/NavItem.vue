<script setup lang="ts">
import Icon from './Icon.vue';
const props = defineProps<{
  item: any;
  level: number;
}>();
const { item, level } = props;
</script>

<template>
  <VListItem
    :to="item.type === 'external' ? '' : item.to"
    :href="item.type === 'external' ? item.to : ''"
    rounded
    class="mb-1"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
  >
    <template v-slot:prepend>
      <Icon :item="item.icon" :level="level" />
    </template>
    <VListItemTitle>{{ item.title }}</VListItemTitle>
    <VListItemSubtitle
      v-if="item.subCaption"
      class="text-caption mt-n1 hide-menu"
    >
      {{ item.subCaption }}
    </VListItemSubtitle>

    <template v-slot:append v-if="item.chip">
      <VChip
        :color="item.chipColor"
        :class="'sidebarchip hide-menu bg-' + item.chipBgColor"
        :size="item.chipIcon ? 'small' : 'small'"
        :variant="item.chipVariant"
        :prepend-icon="item.chipIcon"
      >
        {{ item.chip }}
      </VChip>
    </template>
  </VListItem>
</template>
