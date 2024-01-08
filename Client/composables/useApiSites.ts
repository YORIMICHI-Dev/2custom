export const getRegisterSites = async (userId: number) => {
  const asyncData = await useFetch('http//', {
    method: 'get',
  });

  return asyncData.data;
};
