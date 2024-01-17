import type { CategorySelectSites, RegisteredSite } from '@/types/api/useApiSites';

/**
 * カテゴリごとのサイトリストから、selectedが`true`のサイトのIDとorderを抽出
 *
 * @param {CategorySelectSites[]} categorySelectSites - カテゴリごとに分類されたサイトのリスト
 * @returns {{ siteId: number; order: number; }[]} 選択されたサイトのIDとorderの配列
 */
export const getSelectedSites = (categorySelectSites: CategorySelectSites[]): { siteId: number; order: number }[] => {
  return categorySelectSites.flatMap((categorySite) =>
    categorySite.selectSites
      .filter((site) => site.selected)
      .map((site, index) => ({
        siteId: site.id,
        order: index + 1,
      }))
  );
};

/**
 * カテゴリごとのサイトリストから、各サイトのIDと新しいorder値を含むオブジェクトを作成
 *
 * @param {RegisteredSite[]} registerSites - カテゴリごとに分類されたサイトのリスト
 * @returns {{ siteId: number; order: number; }[]} 各サイトのIDとorderの配列
 */
export const setRegisterSitesOrder = (registerSites: RegisteredSite[]): { siteId: number; order: number }[] => {
  return registerSites.map((site, index) => ({
    siteId: site.id,
    order: index + 1,
  }));
};
