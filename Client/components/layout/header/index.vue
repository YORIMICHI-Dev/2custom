<script setup lang="ts">
import { ListDetailsIcon, SelectIcon } from 'vue-tabler-icons';

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

    <!-- Logo -->
    <div class="ml-5">
      <Logo />
    </div>
    <!-- Logo  -->

    <VSpacer />

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

    <!-- Setting Sort -->
    <NuxtLink to="/custom/sort" class="">
      <VBtn icon color="primary" variant="text">
        <ListDetailsIcon size="20" stroke-width="1.5" />
      </VBtn>
    </NuxtLink>

    <!-- Setting Select -->
    <NuxtLink to="/custom/select" class="">
      <VBtn icon color="primary" variant="text">
        <SelectIcon size="20" stroke-width="1.5" />
      </VBtn>
    </NuxtLink>

    <!-- Notification -->
    <LayoutHeaderNotification />

    <!-- User Profile -->
    <div class="ml-3">
      <LayoutHeaderProfile />
    </div>
  </VAppBar>
</template>
