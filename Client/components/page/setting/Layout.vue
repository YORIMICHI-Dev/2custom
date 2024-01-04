<script setup lang="ts">
const setting = useSettingStore();

// siteNum articleNum max, min
watchEffect(() => {
  if (setting.siteNum > 10) {
    setting.siteNum = 10;
  } else if (setting.siteNum < 1) {
    setting.siteNum = 1;
  }
});
watchEffect(() => {
  if (setting.articleLines > 5) {
    setting.articleLines = 5;
  } else if (setting.articleLines < 1) {
    setting.articleLines = 1;
  }
});
</script>

<template>
  <VCol cols="12" md="9">
    <v-card elevation="10">
      <v-card-item>
        <v-card-title class="text-h4">レイアウト</v-card-title>
        <div>
          <!-- サイトレイアウト -->
          <div class="d-flex align-center mt-7">
            <VAvatar size="48" class="mr-2" rounded="md" color="lightprimary">
              <LayoutIcon size="22" />
            </VAvatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">サイトレイアウト</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">Site Layout</h5>
            </div>

            <VSpacer />
            <div class="d-flex mr-2 align-center">
              <v-radio-group
                hide-details
                v-model="setting.format"
                inline
                class="d-flex"
              >
                <v-radio label="まとめ" color="primary" value="list" />
                <v-radio
                  label="アンテナ"
                  color="primary"
                  value="gather"
                />
              </v-radio-group>
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
              <h6 class="text-h6 mb-3 mt-n1">登録サイト数 (最大10)</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">
                Register Site
              </h5>
            </div>

            <VSpacer />
            <div class="w-40">
              <VSlider
                v-model="setting.siteNum"
                class="align-center"
                color="primary"
                step="1"
                max="10"
                min="1"
                hide-details
              >
                <template v-slot:append>
                  <VTextField
                    v-model="setting.siteNum"
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
              <h6 class="text-h6 mb-3 mt-n1">記事数 (最大5)</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">
                Article Number
              </h5>
            </div>

            <VSpacer />
            <div class="w-40">
              <VSlider
                v-model="setting.articleLines"
                class="align-center"
                color="primary"
                step="1"
                max="5"
                min="1"
                hide-details
              >
                <template v-slot:append>
                  <VTextField
                    v-model="setting.articleLines"
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
      </v-card-item>
    </v-card>
</VCol>
</template>
