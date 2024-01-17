import { loginToast } from '@/theme/toast';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Cookieからトークンを読み込む
  const tokenCookie = useCookie<string | null>('token');
  if (to.path !== '/' && !tokenCookie.value) {
    const toast = useToast();
    toast.add(loginToast);
    return navigateTo('/auth/login');
  }

  const categorySelectSitesStore = useCategorySelectSitesStore();
  const registeredSitesStore = useRegisteredSitesStore();
  const settingStore = useSettingStore();

  if (categorySelectSitesStore.categorySelectSites.length === 0) await categorySelectSitesStore.resetState();
  if (registeredSitesStore.registeredSites.length === 0) await registeredSitesStore.resetState();
  if (settingStore.actTheme.trim() === '') await settingStore.resetState();
});
