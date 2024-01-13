import type {SelectSiteType} from "@/types/site/siteType"

export const getSelectSites = async () => {
  const runtimeConfig = useRuntimeConfig();
  const tokenCookie = useCookie<string|null>("token");
  const {data, error, pending} = await useFetch('/Sites/GetSelectSites', {
    method: 'GET',
    headers: {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${tokenCookie.value}`
    },
    baseURL: runtimeConfig.public.apiUrl,
    transform: (data: any): SelectSiteType[] => {
      const fetchSites = data
      return fetchSites;
    }
  });

  return {data, error, pending}
};
