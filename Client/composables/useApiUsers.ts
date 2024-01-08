export const getUsers = async () => {
  const asyncData = await useFetch('http//', {
    method: 'get',
  });

  return asyncData.data;
};
