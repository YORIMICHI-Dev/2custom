import type { LoginRequestBody, LoginResponse, RegisterRequestBody, RegisterResponse } from '@/types/api/useApiAuth';

export const register = async (requestBody: RegisterRequestBody) => {
  const runtimeConfig = useRuntimeConfig();
  const { data, error } = await useFetch('/Auth/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
    baseURL: runtimeConfig.public.apiUrl,
    transform: (data: any): RegisterResponse => {
      const fetchSites = data;
      return fetchSites;
    },
  });

  return { data, error };
};

export const login = async (requestBody: LoginRequestBody) => {
  const runtimeConfig = useRuntimeConfig();
  const { data, error } = await useFetch('/Auth/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
    baseURL: runtimeConfig.public.apiUrl,
    transform: (data: any): LoginResponse => {
      const fetchSites = data;
      return fetchSites;
    },
  });

  return { data, error };
};
