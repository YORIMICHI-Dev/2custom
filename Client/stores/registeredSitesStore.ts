import { defineStore } from 'pinia';
import type { RegisteredSitesProps } from '@/types/stores/registeredSites';

const fetchRegisteredSites = async() => {
  const { data, error } = await getRegisteredSites();
  return data.value?.registeredSites || [];
}

export const useRegisteredSitesStore = defineStore({
  id: 'registeredSites',
  state: (): RegisteredSitesProps => ({
    registeredSites: [],
  }),
  getters: {},
  actions: {
    async resetState() {
      this.registeredSites = await fetchRegisteredSites();
    },
}});
