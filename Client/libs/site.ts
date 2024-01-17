import type { CategorySelectSites } from "@/types/api/useApiSites";

/**
 * カテゴリごとのサイトリストから、selectedが`true`のidを抽出
 *
 * @param {CategorySelectSites[]} categorySelectSites - カテゴリごとに分類されたサイトのリスト
 * @returns {number[]} 選択されたサイトのIDの配列
 */
export const getSelectedSiteIdList = (categorySelectSites: CategorySelectSites[]): number[] => {
    return categorySelectSites.flatMap(categorySite =>
      categorySite.selectSites
        .filter(site => site.selected)
        .map(site => site.id)
    );
};