export type GetCategorySelectSiteResponse = {
    categorySelectSites: CategorySelectSites[]
  };


export type CategorySelectSites = {
  category: string;
  selectSites: SelectSite[];
}


export type SelectSite = {
    name: string;
    url: string;
    selected: boolean;
  };


export type GetRegisteredSitesResponse = {
  registeredSites: RegisteredSite[]
}


export type RegisteredSite = {
  siteId: number,
  siteName: string,
  order: number,
}


export type RegisterSitesRequestBody = {
    siteIdList: number[]
}
