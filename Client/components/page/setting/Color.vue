<script setup lang="ts">
const setting = useSettingStore();

// themes color options
const themeColors = ref([
  { name: 'BLUE_THEME', bg: 'themeBlue' },
  { name: 'PURPLE_THEME', bg: 'themePurple' },
  { name: 'CYAN_THEME', bg: 'themeCyan' },
  { name: 'ORANGE_THEME', bg: 'themeOrange' },
]);

// Dark Theme Colors
const darkThemeColors = ref([
  { name: 'DARK_BLUE_THEME', bg: 'themeDarkBlue' },
  { name: 'DARK_PURPLE_THEME', bg: 'themeDarkPurple' },
  { name: 'DARK_CYAN_THEME', bg: 'themeDarkCyan' },
  { name: 'DARK_ORANGE_THEME', bg: 'themeDarkOrange' },
]);

// カラー選択によるテーマの切り替え
const selectedTheme = ref(setting.actTheme);
const changeTheme = (theme: string) => {
  selectedTheme.value = theme;
  setting.actTheme = theme;
};

// カラーテーマによるlightとdarkの切り替え
const backColor = ref('light');
watch(backColor, () => {
  if (backColor.value === 'light') {
    selectedTheme.value = setting.actTheme.replace('DARK_', '');
    setting.actTheme = selectedTheme.value;
  } else if (backColor.value === 'dark') {
    selectedTheme.value = 'DARK_' + setting.actTheme;
    setting.actTheme = selectedTheme.value;
  }
});
</script>

<template>
  <VCol cols="12" md="9">
    <v-card elevation="10">
      <v-card-item>
        <v-card-title class="text-h4">テーマカラー</v-card-title>
        <div>
          <!-- サイトレイアウト -->
          <div class="d-flex align-center mt-7">
            <VAvatar v-if="backColor === 'light'" size="48" class="mr-2" rounded="md" color="lightprimary">
              <SunIcon />
            </VAvatar>
            <VAvatar v-else size="48" class="mr-2" rounded="md" color="lightprimary">
              <MoonIcon size="22" />
            </VAvatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">カラーテーマ</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">Theme</h5>
            </div>

            <VSpacer />
            <div class="d-flex mr-2 align-center">
              <v-radio-group hide-details v-model="backColor" inline class="d-flex">
                <v-radio label="ライト" color="primary" value="light" />
                <v-radio label="ダーク" color="primary" value="dark" />
              </v-radio-group>
            </div>
          </div>
        </div>
        <VDivider class="my-6" />

        <!-- Color Pallet -->
        <div>
          <div class="d-flex align-center mt-7">
            <VAvatar size="48" class="mr-2" rounded="md" color="lightprimary">
              <ColorSwatchIcon size="22" />
            </VAvatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">カラー選択</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">Color Pallet</h5>
            </div>

            <VSpacer />
            <VRow class="w-25 mb-1 justify-end mr-5">
              <VItemGroup mandatory v-model="setting.actTheme" class="v-row">
                <!-- Light Theme -->
                <VCol
                  v-if="backColor === 'light'"
                  md="3"
                  xs="6"
                  v-for="theme in themeColors"
                  :key="theme.name"
                  class="pa-2"
                >
                  <VSheet
                    rounded="md"
                    class="border border-primary cursor-pointer d-block pa-4 text-center hover-btns"
                    elevation="9"
                    @click="changeTheme(theme.name)"
                  >
                    <VAvatar :class="theme.bg" size="25">
                      <CheckIcon color="white" size="18" v-if="selectedTheme === theme.name" />
                    </VAvatar>
                  </VSheet>
                </VCol>

                <!-- Dark Theme -->
                <VCol v-else lg="3" sm="4" v-for="theme in darkThemeColors" :key="theme.bg" class="pa-2">
                  <VItem v-slot="{ isSelected, toggle }" :value="theme.name">
                    <VSheet
                      rounded="md"
                      class="border border-primary cursor-pointer d-block pa-4 text-center hover-btns"
                      elevation="9"
                      @click="toggle"
                    >
                      <v-avatar :class="theme.bg" size="25">
                        <CheckIcon color="white" size="18" v-if="isSelected" />
                      </v-avatar>
                    </VSheet>
                  </VItem>
                </VCol>
              </VItemGroup>
            </VRow>
          </div>
        </div>
      </v-card-item>
    </v-card>
  </VCol>
</template>
