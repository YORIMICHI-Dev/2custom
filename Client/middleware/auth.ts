import { jwtDecode } from 'jwt-decode';
import { redirectToLogin } from '@/libs/redirectLogin';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Cookieからトークンを読み込む
  const tokenCookie = useCookie<string | null>('token');

  if (!tokenCookie.value) {
    // ルートパスはモックサイトを表示する
    if (to.path === '/') return;
    // その他のページ遷移時はログイン画面にリダイレクト
    return redirectToLogin();
  }

  // トークンが無効な値であるかtry-catchにて確認
  try {
    const decode = jwtDecode(tokenCookie.value);
    // 有効期限が切れている場合は再ログイン
    if (decode.exp !== undefined && decode.exp * 1000 < Date.now()) return redirectToLogin();
    // 有効期限が残り6時間の場合は新しいトークンを発行
    else if (decode.exp !== undefined && decode.exp * 1000 - Date.now() < 6 * 60 * 60 * 1000) {
      const { data, error } = await refreshToken();
      if (data.value) tokenCookie.value = data.value.token;
      else if (error.value) return redirectToLogin();
    }
  } catch (error) {
    // decodeエラーが発生した場合は再ログイン
    return redirectToLogin();
  }

  // サイトアクセス時に各設定のストアを初期化する
  const categorySelectSitesStore = useCategorySelectSitesStore();
  const registeredSitesStore = useRegisteredSitesStore();
  const settingStore = useSettingStore();

  if (categorySelectSitesStore.categorySelectSites.length === 0) await categorySelectSitesStore.resetState();
  if (registeredSitesStore.registeredSites.length === 0) await registeredSitesStore.resetState();
  if (settingStore.actTheme.trim() === '') await settingStore.resetState();
});
