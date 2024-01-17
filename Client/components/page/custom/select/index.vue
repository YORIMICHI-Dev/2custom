<script setup lang="ts">
import { getSelectedSites } from '@/libs/site';
const router = useRouter();
const updating = ref(false);
const selectSitesStore = useCategorySelectSitesStore();

const clickSaveSites = async () => {
  updating.value = true;

  // 選択したサイトIDとorderを抽出
  const selectedIdList = getSelectedSites(selectSitesStore.categorySelectSites);

  // Register API
  const { data, error } = await registerSites({ registerSites: selectedIdList });
  if (data.value) {
  } else if (error.value) {
    console.log(error.value);
  }
  updating.value = false;
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
          <VBtn
            size="large"
            :disabled="updating"
            :loading="updating"
            color="primary"
            class="mr-4"
            flat
            @click="clickSaveSites"
          >
            Save
          </VBtn>
          <VBtn size="large" class="bg-lighterror text-error" flat @click="clickCancelSetting">Cancel</VBtn>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>
