/**
 * カテゴリごとのサイトリストから、selectedが`true`のサイトのIDとそのリスト内の順序（order）を抽出します。
 *
 * @param {Array} categorySelectSites - カテゴリごとに分類されたサイトのリスト。
 * @returns {Array} 選択されたサイトのIDとそれらの順序を含むオブジェクトの配列。
 */
export const getSelectedSites = (
  categorySelectSites: {
    category: string;
    selectSites: {
      id: number;
      name: string;
      url: string;
      selected: boolean;
    }[];
  }[]
): { siteId: number; order: number }[] => {
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
 * 与えられたサイトのリストに対して、各サイトに新しい順序（order）を割り当てます。
 *
 * @param {Array} registerSites - サイトのリスト。
 * @returns {Array} 各サイトのIDと新しい順序を含むオブジェクトの配列。
 */
export const setRegisterSitesOrder = (
  registerSites: {
    id: number;
    name: string;
    url: string;
    category: string;
    order: number;
  }[]
): { siteId: number; order: number }[] => {
  return registerSites.map((site, index) => ({
    siteId: site.id,
    order: index + 1,
  }));
};
