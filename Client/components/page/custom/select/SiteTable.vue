<script setup lang="ts">
const selectSitesStore = useCategorySelectSitesStore();

const clickSelected = (site: { id: number; name: string; url: string; selected: boolean }) => {
  site.selected = !site.selected;
};
</script>

<template>
  <div v-for="select in selectSitesStore.categorySelectSites" :key="select.category">
    <SharedUIParentCard :title="select.category">
      <VRow>
        <VCol v-for="site in select.selectSites" v-bind:key="site.name" rows="12" md="3" sm="12">
          <VBtn class="text-body-1 w-100" :class="{ 'bg-secondary': site.selected }" @click="clickSelected(site)">
            <img height="18" class="mr-2" :src="'http://www.google.com/s2/favicons?domain=' + site.url" />
            {{ site.name }}
          </VBtn>
        </VCol>
      </VRow>
    </SharedUIParentCard>
  </div>
</template>
