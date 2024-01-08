<script setup lang="ts">
const setting = useSettingStore();
</script>

<template>
  <!-- Scroll btn -->
  <VCol cols="12" md="9">
    <v-card elevation="10">
      <v-card-item>
        <v-card-title class="text-h4">スクロールボタン</v-card-title>
        <div>
          <div class="d-flex align-center mt-7">
            <VAvatar size="48" class="mr-2" rounded="md" color="lightprimary">
              <ArrowBigUpLineIcon size="22" />
            </VAvatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">スクロールボタン</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">Scroll Button</h5>
            </div>
            <VSpacer />
            <div>
              <VSwitch class="mr-5" v-model="setting.scrollButton" hide-details color="primary" />
            </div>
          </div>
        </div>
      </v-card-item>
    </v-card>
  </VCol>
</template>
