<script setup lang="ts">
const setting = useSettingStore();

// siteNum articleNum max, min
watchEffect(() => {
  if (setting.maxSiteNum > 10) {
    setting.maxSiteNum = 10;
  } else if (setting.maxSiteNum < 1) {
    setting.maxSiteNum = 1;
  }
});
watchEffect(() => {
  if (setting.maxArticleLines > 5) {
    setting.maxArticleLines = 5;
  } else if (setting.maxArticleLines < 1) {
    setting.maxArticleLines = 1;
  }
});
</script>

<template>
  <VCol cols="12" md="9">
    <VCard elevation="10">
      <VCardItem>
        <VCardTitle class="text-h4">レイアウト</VCardTitle>
        <!-- サイトレイアウト -->
        <div>
          <div class="d-flex align-center mt-7">
            <VAvatar size="48" class="mr-2" rounded="md" color="lightprimary">
              <LayoutIcon size="22" />
            </VAvatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">レイアウト</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">Site Layout</h5>
            </div>

            <VSpacer />
            <div class="d-flex mr-2 align-center">
              <VRadioGroup hide-details v-model="setting.format" inline class="d-flex">
                <VRadio label="まとめ" color="primary" value="list" />
                <VRadio label="アンテナ" color="primary" value="gather" />
              </VRadioGroup>
            </div>
          </div>
        </div>
        <VDivider class="my-6" />

        <!-- サイト数 -->
        <div>
          <div class="d-flex align-center mt-7">
            <VAvatar size="48" class="mr-2" rounded="md" color="lightprimary">
              <RssIcon size="22" />
            </VAvatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">登録サイト数</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">Register Site</h5>
            </div>

            <VSpacer />
            <div class="w-40">
              <VSlider
                v-model="setting.maxSiteNum"
                class="align-center"
                color="primary"
                step="1"
                max="10"
                min="1"
                hide-details
              >
                <template v-slot:append>
                  <VTextField
                    v-model="setting.maxSiteNum"
                    hide-details
                    single-line
                    density="compact"
                    type="number"
                    maxlength="10"
                    style="width: 70px"
                  ></VTextField>
                </template>
              </VSlider>
            </div>
          </div>
        </div>
        <VDivider class="my-6" />

        <!-- 記事数 -->
        <div>
          <div class="d-flex align-center mt-7">
            <VAvatar size="48" class="mr-2" rounded="md" color="lightprimary">
              <ArticleIcon size="22" />
            </VAvatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">記事数</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">Article Number</h5>
            </div>

            <VSpacer />
            <div class="w-40">
              <VSlider
                v-model="setting.maxArticleLines"
                class="align-center"
                color="primary"
                step="1"
                max="5"
                min="1"
                hide-details
              >
                <template v-slot:append>
                  <VTextField
                    v-model="setting.maxArticleLines"
                    hide-details
                    single-line
                    density="compact"
                    type="number"
                    style="width: 70px"
                  ></VTextField>
                </template>
              </VSlider>
            </div>
          </div>
        </div>
      </VCardItem>
    </VCard>
  </VCol>
</template>
