import { loginToast } from '@/theme/toast';

export const redirectToLogin = () => {
  const toast = useToast();
  toast.add(loginToast);
  return navigateTo('/auth/login');
};
