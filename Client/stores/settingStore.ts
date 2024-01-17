import { defineStore } from 'pinia';
import type { SettingProps } from '@/types/stores/setting';

const fetchRegisteredSites = async () => {
  const { data, error } = await getLoginUser();
  const user = data.value;
  return (
    user || {
      colorTheme: 'BLUE_THEME',
      showScrollButton: false,
    }
  );
};

export const useSettingStore = defineStore({
  id: 'setting',
  state: (): SettingProps => ({
    actTheme: '',
    format: 'list',
    maxSiteNum: 10,
    maxArticleLines: 5,
    scrollButton: false,
  }),

  getters: {},
  actions: {
    async resetState() {
      const user = await fetchRegisteredSites();
      this.actTheme = user.colorTheme;
      this.scrollButton = user.showScrollButton;
    },
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
