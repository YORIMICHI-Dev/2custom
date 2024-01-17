import { defineStore } from 'pinia';
import type { CategorySelectSitesProps } from '@/types/stores/categorySelectSites';

const fetchInitialSelectSites = async () => {
  const { data, error } = await getCategorySelectSites();
  if (error.value) console.log(error.value);
  return data.value?.categorySelectSites || [];
};

export const useCategorySelectSitesStore = defineStore({
  id: 'categorySelectSites',
  state: (): CategorySelectSitesProps => ({
    categorySelectSites: [],
  }),
  getters: {},
  actions: {
    async resetState() {
      this.categorySelectSites = await fetchInitialSelectSites();
    },
  },
});
