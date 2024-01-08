export const getSelectSites = async () => {
  const runtimeConfig = useRuntimeConfig();
  const { data, error } = await useFetch('/Sites/GetSelectSites', {
    method: 'GET',
    baseURL: runtimeConfig.public.apiUrl,
  });

  if (error.value) {
    console.error(error.value);
    return;
  }

  if (data.value) {
    console.log(data.value);
    return data.value;
  }
};
