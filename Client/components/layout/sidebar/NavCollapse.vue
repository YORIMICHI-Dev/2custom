<script setup lang="ts">
import Icon from './Icon.vue';
const props = defineProps<{
  item: any;
  level: number;
}>();
const { item, level } = props;
</script>

<template>
  <VListGroup no-action>
    <!-- Dropdown -->
    <template v-slot:activator="{ props }">
      <VListItem
        v-bind="props"
        :value="item.title"
        rounded
        class="mb-1"
        color="primary"
      >
        <template v-slot:prepend>
          <Icon :item="item.icon" :level="level" />
        </template>
        <VListItemTitle class="mr-auto">{{ item.title }}</VListItemTitle>
        <VListItemSubtitle
          v-if="item.subCaption"
          class="text-caption mt-n1 hide-menu"
        >
          {{ item.subCaption }}
        </VListItemSubtitle>
      </VListItem>
    </template>

    <!-- Sub Item -->
    <template v-if="item.children">
      <template v-for="(subitem, i) in item.children" :key="i">
        <LayoutSidebarNavCollapse
          :item="subitem"
          v-if="subitem.children"
          :level="level + 1"
        />
        <LayoutSidebarNavItem :item="subitem" v-else :level="level + 1" />
      </template>
    </template>
  </VListGroup>
</template>
