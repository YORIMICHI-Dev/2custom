export type GetCategorySelectSiteResponse = {
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

export type GetRegisteredSitesResponse = {
  registeredSites: {
    id: number;
    name: string;
    url: string;
    category: string;
    order: number;
  }[];
};

export type RegisterSitesRequestBody = {
  registerSites: {
    siteId: number;
    order: number;
  }[];
};
