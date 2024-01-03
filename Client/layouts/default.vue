<script setup lang="ts">
const setting = useSettingStore();
const sidebar = useSidebarStore();
const TITLE = '2ch Customizer';

useHead({
  meta: [{ content: TITLE }],
  titleTemplate: (titleChunk: string | undefined) => {
    let title = TITLE;
    if (titleChunk !== undefined) return `${titleChunk} | Dashboard`;
    return title;
  },
});
</script>

<template>
  <VApp
    :theme="setting.actTheme"
    :class="[
      setting.actTheme,
      sidebar.miniSidebar ? 'mini-sidebar' : '',
    ]"
  >
    <!-- Customizer Drawer -->
    <VNavigationDrawer
      app
      temporary
      elevation="10"
      location="right"
      v-model="sidebar.customizerDrawer"
      width="320"
    >
      <LayoutCustom />
    </VNavigationDrawer>
    <!-- Customizer Drawer -->

    <!-- Sidebar -->
    <LayoutSidebar />
    <!-- Sidebar -->

    <!-- Main Contents -->
    <VMain>
      <VContainer fluid class="page-wrapper pb-sm-15 pb-10">
        <div class="maxWidth">
          <!-- Main View -->
          <slot />
          <!-- Main View -->

          <!-- Customizer button -->
          <LayoutUpButton/>
        </div>
        <!-- Customizer button -->
      </VContainer>
    </VMain>
    <!-- Main Contents -->
  </VApp>
</template>
