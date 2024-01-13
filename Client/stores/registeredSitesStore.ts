import { defineStore } from 'pinia';
import type { RegisteredSitesProps } from '@/types/stores/registeredSites';

const { data, error } = await getRegisteredSites()
const initialRegisteredSites = data.value?.registeredSites || [];

export const useRegisteredSitesStore = defineStore({
  id: 'registeredSites',
  state: (): RegisteredSitesProps => ({
    registeredSites: initialRegisteredSites,
  }),
  getters: {},
  actions: {},
});
