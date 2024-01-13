import { defineStore } from 'pinia';
import type { CategorySelectSitesProps } from '@/types/stores/categorySelectSites';

const { data, error } = await getCategorySelectSites()
const initialSelectSites = data.value?.categorySelectSites || [];

export const useCategorySelectSitesStore = defineStore({
  id: 'registeredSites',
  state: (): CategorySelectSitesProps => ({
    categorySelectSites: initialSelectSites,
  }),
  getters: {},
  actions: {},
});
