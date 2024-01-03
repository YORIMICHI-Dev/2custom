import { defineStore } from 'pinia';
import type { SidebarProps } from '@/types/sidebar';

export const useSidebarStore = defineStore({
  id: 'sidebar',
  state: (): SidebarProps => ({
    sidebarDrawer: null,
    customizerDrawer: false,
    miniSidebar: false,
  }),

  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.sidebarDrawer = !this.sidebarDrawer;
    },
    SET_MINI_SIDEBAR(payload: boolean) {
      this.miniSidebar = payload;
    },
    SET_CUSTOMIZER_DRAWER(payload: boolean) {
      this.customizerDrawer = payload;
    },
  },
});
