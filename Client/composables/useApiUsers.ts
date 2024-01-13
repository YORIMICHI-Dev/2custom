import type { LoginUserResponse, UpdateUserSettingRequestBody } from "@/types/api/useApiUsers";

export const getLoginUser = async () => {
  const runtimeConfig = useRuntimeConfig();
  const tokenCookie = useCookie<string|null>("token");
  const {data, error} = await useFetch('/Users/GetLoginUser', {
    method: 'GET',
    headers: {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${tokenCookie.value}`
    },
    baseURL: runtimeConfig.public.apiUrl,
    transform: (data: any): LoginUserResponse => {
      const fetchLoginUser = data
      return fetchLoginUser;
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


export const updateUserSetting = async (requestBody: UpdateUserSettingRequestBody) => {
  const runtimeConfig = useRuntimeConfig();
  const tokenCookie = useCookie<string|null>("token");
  const {data, error} = await useFetch('/Users/UpdateUserSetting', {
    method: 'PUT',
    headers: {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${tokenCookie.value}`
    },
    body: requestBody,
    baseURL: runtimeConfig.public.apiUrl,
  });

  if (error.value) {
    console.error(error.value);
    return;
  }

  if (data.value) {
    console.log(data.value)
    return data;
  }
};