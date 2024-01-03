import { defineStore } from 'pinia';
import type { SettingProps } from '@/types/setting';

export const useSettingStore = defineStore({
  id: 'setting',
  state: (): SettingProps => ({
    actTheme: 'GREEN_THEME',
  }),

  getters: {},
  actions: {
    SET_THEME(payload: any) {
      this.actTheme = payload;
    },
  },
});
