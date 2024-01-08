import type {SelectSiteType} from "@/types/site/siteType"

export const getSelectSites = async () => {
  const runtimeConfig = useRuntimeConfig();
  const { data, error } = await useFetch('/Sites/GetSelectSites', {
    method: 'GET',
    baseURL: runtimeConfig.public.apiUrl,
    transform: (data: any): SelectSiteType[] => {
      const fetchSites = data
      return fetchSites;
    }
  });

  if (error.value) {
    console.error(error.value);
    return;
  }

  if (data.value) {
    return data;
  }
};
