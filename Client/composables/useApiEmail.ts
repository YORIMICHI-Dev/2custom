import type { FormEmailRequestBody, FormEmailResponse } from '@/types/api/useApiEmail';

export const formEmail = async (requestBody: FormEmailRequestBody) => {
  const runtimeConfig = useRuntimeConfig();
  const { data, error } = await useFetch('/Email/FormEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
    baseURL: runtimeConfig.public.apiUrl,
    transform: (data: any): FormEmailResponse => {
      const fetchSites = data;
      return fetchSites;
    },
  });

  return { data, error };
};
