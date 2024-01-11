<script setup lang="ts">
// feature fetch from db
const sites = useSitesStore();
</script>

<template>
  <VRow class="justify-center ma-n2">
    <VCol cols="12" md="10">
      <SharedUIParentCard title="サイト表示順（ドラッグ）">
        <draggable
          class="dragArea list-group cursor-move"
          :list="sites.siteList"
          :animation="300"
          ghost-class="ghost-card"
          group="sites"
        >
          <div v-for="item in sites.siteList" :key="item.name" class="py-2 px-10">
            <VRow>
              <VCol md="2" sm="2">
                <VBtn size="30" icon variant="flat" class="">
                  <BaselineDensityMediumIcon size="18" class="cursor-move" />
                </VBtn>
              </VCol>
              <VCol md="6" sm="6">
                <div class="d-flex align-center">
                  <img height="16" class="mr-3" :src="'http://www.google.com/s2/favicons?domain=' + item.url" />
                  <h5 class="text-h5 text-no-wrap">{{ item.name }}</h5>
                </div>
              </VCol>
              <VCol md="2" sm="2">
                <!-- Category -->
                <VChip rounded="lg" class="font-weight-bold py-4 px-3" :color="item.categoryColor" size="small">
                  {{ item.category }}
                </VChip>
              </VCol>
              <VCol md="2" sm="2">
                <VBtn size="30" icon variant="flat" class="mr-2 bg-error">
                  <VTooltip activator="parent" location="top">削除</VTooltip>
                  <TrashIcon size="18" class="" />
                </VBtn>
              </VCol>
            </VRow>
            <VDivider class="mt-1" />
          </div>
        </draggable>
      </SharedUIParentCard>
    </VCol>
  </VRow>
</template>

<style>
th.w-20 {
  width: 20%;
}

th.w-30 {
  width: 30%;
}

th.w-40 {
  width: 40%;
}

th.w-50 {
  width: 50%;
}
</style>
