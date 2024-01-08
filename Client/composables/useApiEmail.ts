const sendEmail = async (userId: string, email: string, content: string, detail: string) => {
  const asyncData = await useFetch('http//', {
    method: 'post',
  });

  return asyncData.data;
};
