<script setup lang="ts">
import { ListDetailsIcon } from 'vue-tabler-icons';

const sidebar = useSidebarStore();
</script>

<template>
  <VAppBar elevation="0" height="70">
    <!-- Sidebar open/minimize more than lg -->
    <VBtn
      class="hidden-md-and-down custom-hover-primary"
      icon
      color="primary"
      variant="text"
      @click.stop="sidebar.SET_MINI_SIDEBAR(!sidebar.miniSidebar)"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </VBtn>

    <!-- Sidebar open/close less than lg -->
    <VBtn
      class="hidden-lg-and-up ms-3"
      icon
      variant="flat"
      @click.stop="sidebar.SET_SIDEBAR_DRAWER"
      size="small"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </VBtn>

    <!-- Setting -->
    <NuxtLink href="/custom" class="">
      <VBtn
        class="custom-hover-primary"
        icon
        color="primary"
        variant="text"
        @click.stop="sidebar.SET_MINI_SIDEBAR(!sidebar.miniSidebar)"
      >
        <ListDetailsIcon size="20" stroke-width="1.5" />
      </VBtn>
    </NuxtLink>

    <VSpacer />
    <!-- Notification -->
    <LayoutHeaderNotification />

    <!-- User Profile -->
    <div class="ml-3">
      <LayoutHeaderProfile />
    </div>
  </VAppBar>
</template>
