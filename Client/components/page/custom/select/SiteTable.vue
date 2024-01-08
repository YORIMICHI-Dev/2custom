<script setup lang="ts">
import type {SiteType} from "@/types/site/siteType"
const fetchSelectSites = await getSelectSites()
const clickSelected = (site: SiteType) => {
  site.selected = !site.selected;
};
</script>

<template>
  <div v-for="select in fetchSelectSites" :key="select.category">
     <SharedUIParentCard :title="select.category">
      <VRow>
        <VCol v-for="site in select.selectSites" rows="12" md="3" sm="12">
          <VBtn class="text-body-1 w-100" :class="{ 'bg-secondary': site.selected }" @click="clickSelected(site)">
            <img height="18" class="mr-2" :src="'http://www.google.com/s2/favicons?domain=' + site.url" />
            {{ site.name }}
          </VBtn>
        </VCol>
      </VRow>
    </SharedUIParentCard>
  </div>
</template>
