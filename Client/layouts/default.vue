<script setup lang="ts">
const setting = useSettingStore();
const sidebar = useSidebarStore();
const TITLE = 'まとめカスタマイズ';

useHead({
  meta: [{ content: TITLE }],
  titleTemplate: (titleChunk: string | undefined) => {
    let title = TITLE;
    if (titleChunk !== undefined) return `${titleChunk} | まとめカスタマイズ`;
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
    <!-- Sidebar -->
    <LayoutSidebar />

    <LayoutHeader />

    <!-- Main Contents -->
    <VMain>
      <VContainer fluid class="page-wrapper pb-sm-15 pb-10">
        <div class="maxWidth">
          <!-- Main View -->
          <slot />
          <!-- Main View -->

          <!-- Scroll button -->
          <LayoutScrollButton />
        </div>
      </VContainer>
    </VMain>
  </VApp>
</template>
