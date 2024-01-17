export type CategorySelectSitesProps = {
  categorySelectSites: {
    category: string;
    selectSites: {
      id: number;
      name: string;
      url: string;
      selected: boolean;
    }[];
  }[];
};
