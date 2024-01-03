<script setup lang="ts">
import Icon from '../layout/sidebar/Icon.vue';
const props = defineProps<{
  title: string;
  icon?: any;
}>();
const { title } = props;
</script>

// ===============================|| Ui Parent
Card||=============================== //
<template>
  <VCard class="mb-6" elevation="10">
    <VCardItem class="py-4 px-6">
      <div class="d-sm-flex align-center">
        <v-card-title class="text-h4 d-flex">
          <div v-if="icon" class="mr-2 d-flex align-center">
            <Icon size="28" :item="icon" :level="0" />
          </div>
          {{ title }}
        </v-card-title>
        <!-- <template v-slot:append> -->
        <slot name="action"></slot>
        <!-- </template> -->
      </div>
    </VCardItem>
    <VDivider></VDivider>
    <VCardText>
      <slot />
    </VCardText>
  </VCard>
</template>
