<script setup lang="ts">
const router = useRouter();
const setting = useSettingStore();
const updating = ref(false)

const clickSaveSetting = async() => {
  updating.value = true
  const { data, error } = await updateUserSetting({colorTheme: setting.actTheme, showScrollButton: setting.scrollButton})
  updating.value = false
};

const clickCancelSetting = () => {
  router.push('/');
};
</script>

<template>
  <VRow class="justify-center ma-n2">
    <!-- Site -->
    <!-- <PageSettingLayout /> -->

    <!-- Color -->
    <PageSettingColor />

    <PageSettingScroll />

    <!-- Save or Cancel btn -->
    <VCol cols="12" md="9">
      <div class="d-flex justify-end mt-5">
        <VBtn size="large" color="primary" class="mr-4" flat @click="clickSaveSetting">
          <VProgressCircular v-if="updating" indeterminate size="24" color="white" />
          <span v-else>Save</span>
        </VBtn>
        <VBtn size="large" class="bg-lighterror text-error" flat @click="clickCancelSetting">Cancel</VBtn>
      </div>
    </VCol>
  </VRow>
</template>
