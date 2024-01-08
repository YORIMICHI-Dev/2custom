<script setup lang="ts">
import { selectSites } from './selectSites';
import type { SiteType } from './selectSites';

const refSelectSites = ref(selectSites);
const clickSelected = (site: SiteType) => {
  site.selected = !site.selected;
};
</script>

<template>
  <div v-for="select in refSelectSites" :key="select.category">
    <SharedUIParentCard v-if="select.sites.length !== 0" :title="select.category">
      <VRow>
        <VCol v-for="site in select.sites" rows="12" md="3" sm="12">
          <VBtn class="text-h6 w-100" :class="{ 'bg-secondary': site.selected }" @click="clickSelected(site)">
            <img height="18" class="mr-3" :src="'http://www.google.com/s2/favicons?domain=' + site.url" />
            {{ site.name }}
          </VBtn>
        </VCol>
      </VRow>
    </SharedUIParentCard>
  </div>
</template>
