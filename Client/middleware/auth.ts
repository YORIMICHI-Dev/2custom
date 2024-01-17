export default defineNuxtRouteMiddleware(async (to, from) => {
  // ルートパスへのアクセスを除外
  if (to.path === '/') return;

  // Cookieからトークンを読み込む
  const tokenCookie = useCookie<string | null>('token');
  if (!tokenCookie.value) return navigateTo('/auth/login');

  const categorySelectSitesStore = useCategorySelectSitesStore();
  const registeredSitesStore = useRegisteredSitesStore();
  const settingStore = useSettingStore();

  if (categorySelectSitesStore.categorySelectSites.length == 0) await categorySelectSitesStore.resetState();
  if (registeredSitesStore.registeredSites.length == 0) await registeredSitesStore.resetState();
  if (settingStore.actTheme.trim() == '') await settingStore.resetState();
});
