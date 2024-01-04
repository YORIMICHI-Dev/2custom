import { defineStore } from 'pinia';
import type { SettingProps } from '@/types/setting';

export const useSettingStore = defineStore({
  id: 'setting',
  state: (): SettingProps => ({
    actTheme: 'GREEN_THEME',
    format: 'list',
    siteNum: 10,
    articleLines: 5,
    scrollButton: false,
  }),

  getters: {},
  actions: {
    SET_THEME(payload: string) {
      this.actTheme = payload;
    },
    SET_FORMAT(payload: 'list' | 'gather') {
      this.format = payload;
    },
    SET_ARTICLE_LINES(payload: number) {
      this.articleLines = payload;
    },
    SET_SITE_NUM(payload: number) {
      this.siteNum = payload;
    },
    TOGGLE_SCROLL_BUTTON() {
      this.scrollButton = !this.scrollButton;
    },
  },
});
