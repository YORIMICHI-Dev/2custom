<script setup lang="ts">
const setting = useSettingStore();

// themes color options
const themeColors = {
  light: [
    { name: 'BLUE_THEME', bg: 'themeBlue' },
    { name: 'PURPLE_THEME', bg: 'themePurple' },
    { name: 'CYAN_THEME', bg: 'themeCyan' },
    { name: 'ORANGE_THEME', bg: 'themeOrange' },
  ],
  dark: [
    { name: 'DARK_BLUE_THEME', bg: 'themeDarkBlue' },
    { name: 'DARK_PURPLE_THEME', bg: 'themeDarkPurple' },
    { name: 'DARK_CYAN_THEME', bg: 'themeDarkCyan' },
    { name: 'DARK_ORANGE_THEME', bg: 'themeDarkOrange' }
  ]
};


// カラー選択によるテーマの切り替え
const changeTheme = (theme: string) => {
  setting.actTheme = theme;
};

// カラーテーマによるlightとdarkの切り替え
// テーマの監視
const backColor = setting.actTheme.includes("DARK_") ? "dark": "light";
const refBackColor = ref(backColor)

// カラーテーマの監視
const currentThemeColors = setting.actTheme.includes("DARK_") ? themeColors.dark: themeColors.light;
const refThemeColors = ref(currentThemeColors)

// カラーテーマによるlightとdarkの切り替え、カラーテーマリストと現在のカラーをテーマに切り替える
watch(refBackColor, () => {
  if (refBackColor.value === 'light') {
    refThemeColors.value = themeColors.light
    setting.actTheme = setting.actTheme.replace('DARK_', '');
  } else if (refBackColor.value === 'dark') {
    refThemeColors.value = themeColors.dark
    setting.actTheme = 'DARK_' + setting.actTheme;
  }
});
</script>

<template>
  <VCol cols="12" md="9">
    <v-card elevation="10">
      <v-card-item>
        <v-card-title class="text-h4">テーマカラー</v-card-title>
        <!-- テーマ -->
        <div>
          <div class="d-flex align-center mt-7">
            <VAvatar v-if="refBackColor === 'light'" size="48" class="mr-2" rounded="md" color="lightprimary">
              <SunIcon />
            </VAvatar>
            <VAvatar v-else size="48" class="mr-2" rounded="md" color="lightprimary">
              <MoonIcon size="22" />
            </VAvatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">テーマ</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">Theme</h5>
            </div>

            <VSpacer />
            <div class="d-flex mr-2 align-center">
              <v-radio-group hide-details v-model="refBackColor" inline class="d-flex">
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
                <!-- Theme -->
                <VCol
                md="3"
                xs="6"
                v-for="theme in refThemeColors"
                :key="theme.name"
                class="pa-2"
                >
                <VItem v-slot="{ isSelected, toggle }" :value="theme.name">
                  <VSheet
                    rounded="md"
                    class="border border-primary cursor-pointer d-block pa-4 text-center hover-btns"
                    elevation="9"
                    @click="changeTheme(theme.name)"
                  >
                    <VAvatar :class="theme.bg" size="25">
                      <CheckIcon color="white" size="18" v-if="isSelected" />
                    </VAvatar>
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
