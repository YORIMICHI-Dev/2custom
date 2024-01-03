<script setup lang="ts">
const setting = useSettingStore();

const dark = computed(() => {
  if (
    setting.actTheme === 'DARK_BLUE_THEME' ||
    setting.actTheme === 'DARK_AQUA_THEME' ||
    setting.actTheme === 'DARK_ORANGE_THEME' ||
    setting.actTheme === 'DARK_PURPLE_THEME' ||
    setting.actTheme === 'DARK_GREEN_THEME' ||
    setting.actTheme === 'DARK_CYAN_THEME'
  ) {
    return true;
  } else {
    return false;
  }
});
</script>

<template>
  <LogoLight v-if="dark" />
  <LogoDark v-else />
</template>
