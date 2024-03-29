import type {
  GetCategorySelectSiteResponse,
  GetRegisteredSitesResponse,
  RegisterSitesRequestBody,
} from '@/types/api/useApiSites';

export const getCategorySelectSites = async () => {
  const runtimeConfig = useRuntimeConfig();
  const tokenCookie = useCookie<string | null>('token');
  const { data, error } = await useFetch('/Sites/GetCategorySelectSites', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenCookie.value}`,
    },
    baseURL: runtimeConfig.public.apiUrl,
    transform: (data: any): GetCategorySelectSiteResponse => {
      const fetchSites = data;
      return fetchSites;
    },
  });

  return { data, error };
};

export const getRegisteredSites = async () => {
  const runtimeConfig = useRuntimeConfig();
  const tokenCookie = useCookie<string | null>('token');
  const { data, error } = await useFetch('/Sites/GetRegisteredSites', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenCookie.value}`,
    },
    baseURL: runtimeConfig.public.apiUrl,
    transform: (data: any): GetRegisteredSitesResponse => {
      const fetchSites = data;
      if (fetchSites) {
        data.registeredSites.sort((a: any, b: any) => a.order - b.order);
      }
      return fetchSites;
    },
  });

  return { data, error };
};

export const registerSites = async (requestBody: RegisterSitesRequestBody) => {
  const runtimeConfig = useRuntimeConfig();
  const tokenCookie = useCookie<string | null>('token');
  const { data, error } = await useFetch('/Sites/RegisterSites', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenCookie.value}`,
    },
    body: requestBody,
    baseURL: runtimeConfig.public.apiUrl,
  });

  return { data, error };
};
