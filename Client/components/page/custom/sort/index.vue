<script setup lang="ts">
import { setRegisterSitesOrder } from '@/libs/site';
const router = useRouter();
const updating = ref(false);
const registeredSitesStore = useRegisteredSitesStore();

const clickSaveSites = async () => {
  updating.value = true;
  // 選択したサイトIDを抽出
  const orderedRegisterSites = setRegisterSitesOrder(registeredSitesStore.registeredSites);
  // Register API
  const { data, error } = await registerSites({ registerSites: orderedRegisterSites });
  if (data.value) {
    // store更新
    await registeredSitesStore.resetState();
  } else if (error.value) {
    console.log(error.value);
  }
  updating.value = false;
};

const clickCancelSetting = () => {
  router.push('/');
};

const clickDeleteSite = (siteId: number) => {
  if (registeredSitesStore.registeredSites.length === 0) return;
  registeredSitesStore.registeredSites = registeredSitesStore.registeredSites.filter((site) => {
    return site.id !== siteId;
  });
};
</script>

<template>
  <VRow class="justify-center ma-n2">
    <VCol cols="12" md="10">
      <SharedUIParentCard title="サイト表示順（ドラッグ）">
        <draggable
          class="dragArea list-group cursor-move"
          :list="registeredSitesStore.registeredSites"
          :animation="300"
          ghost-class="ghost-card"
          group="sites"
        >
          <div v-for="registerSite in registeredSitesStore.registeredSites" :key="registerSite.name" class="py-2 px-10">
            <VRow>
              <VCol md="2" sm="2">
                <VBtn size="30" icon variant="flat" class="">
                  <BaselineDensityMediumIcon size="18" class="cursor-move" />
                </VBtn>
              </VCol>
              <VCol md="6" sm="6">
                <div class="d-flex align-center">
                  <img height="16" class="mr-3" :src="'http://www.google.com/s2/favicons?domain=' + registerSite.url" />
                  <h5 class="text-h5 text-no-wrap">{{ registerSite.name }}</h5>
                </div>
              </VCol>
              <VCol md="2" sm="2">
                <!-- Category -->
                <VChip rounded="lg" class="font-weight-bold py-4 px-3" color="primary" size="small">
                  {{ registerSite.category }}
                </VChip>
              </VCol>
              <VCol md="2" sm="2">
                <VBtn size="30" icon variant="flat" class="mr-2 bg-error" @click="clickDeleteSite(registerSite.id)">
                  <VTooltip activator="parent" location="top">削除</VTooltip>
                  <TrashIcon size="18" class="" />
                </VBtn>
              </VCol>
            </VRow>
            <VDivider class="mt-1" />
          </div>
        </draggable>
      </SharedUIParentCard>

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
    </VCol>
  </VRow>
</template>
