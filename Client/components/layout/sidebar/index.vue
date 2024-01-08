<script setup lang="ts">
import sidebarItem from '@/components/layout/sidebar/sidebarItem';
const sidebarMenu = shallowRef(sidebarItem);
const sidebar = useSidebarStore();
</script>

<template>
  <VNavigationDrawer
    left
    v-model="sidebar.sidebarDrawer"
    width="200"
    elevation="0"
    rail-width="75"
    class="leftSidebar"
    :rail="sidebar.miniSidebar"
    floating
    app
  >
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <VList class="pa-6" density="compact">
        <template v-for="item in sidebarMenu">
          <!-- Item Sub Header -->
          <LayoutSidebarNavGroup :item="item" v-if="item.header" :key="item.title" />

          <!-- If Has Child -->
          <LayoutSidebarNavCollapse
            class="leftPadding"
            :item="item"
            :level="0"
            :key="item.children.at(0)?.title"
            v-else-if="item.children"
          />

          <!-- Single Item -->
          <LayoutSidebarNavItem :item="item" :level="0" :key="item.chipIcon" v-else class="leftPadding" />
        </template>
      </VList>
      <!-- Profile Card-->
      <div class="pa-6 userbottom">
        <LayoutSidebarProfile v-if="!sidebar.miniSidebar" />
      </div>
    </perfect-scrollbar>
  </VNavigationDrawer>
</template>
