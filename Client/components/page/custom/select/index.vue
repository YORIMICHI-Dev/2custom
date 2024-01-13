<script setup lang="ts">
const router = useRouter();
const updating = ref(false);
const selectSitesStore = useCategorySelectSitesStore();

const clickSaveSites = async () => {
  // updating.value = true
  // const {data, error} = await registerSites({siteIdList: []})
  // updating.value = false
  console.log(selectSitesStore.categorySelectSites);
};

const clickCancelSetting = () => {
  router.push('/');
};
</script>

<template>
  <VRow class="justify-center ma-n2">
    <VCol cols="12" md="10">
      <VCard elevation="0" class="pa-6 border">
        <PageCustomSelectSiteTable />

        <!-- Submit -->
        <div class="d-flex justify-end mt-5">
          <VBtn size="large" color="primary" class="mr-4" flat @click="clickSaveSites">
            <VProgressCircular v-if="updating" indeterminate size="24" color="white" />
            <span v-else>Save</span>
          </VBtn>
          <VBtn size="large" class="bg-lighterror text-error" flat @click="clickCancelSetting">Cancel</VBtn>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>
