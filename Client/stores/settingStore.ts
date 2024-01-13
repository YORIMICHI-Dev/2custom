import { defineStore } from 'pinia';
import type { SettingProps } from '~/types/stores/setting';

// Userを取得
const loginUser = await getLoginUser();
const colorTheme = loginUser?.value?.colorTheme || "BLUE_THEME";
const showScrollButton = loginUser?.value?.showScrollButton ?? false;

export const useSettingStore = defineStore({
  id: 'setting',
  state: (): SettingProps => ({
    actTheme: colorTheme,
    format: 'list',
    maxSiteNum: 10,
    maxArticleLines: 5,
    scrollButton: showScrollButton,
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
      this.maxArticleLines = payload;
    },
    SET_SITE_NUM(payload: number) {
      this.maxSiteNum = payload;
    },
    TOGGLE_SCROLL_BUTTON() {
      this.scrollButton = !this.scrollButton;
    },
  },
});
