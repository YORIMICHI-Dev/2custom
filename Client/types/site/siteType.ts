export type SelectSiteType = {
  category: string;
  selectSites: SiteType[];
};

export type SiteType = {
  name: string;
  url: string;
  selected: boolean;
};

export type selectSiteType = {
  name: string;
  url: string;
  rssUrl: string;
  category: Category;
  categoryColor: string;
};

type Category = 'chat' | 'sports' | 'adult' | 'VTuber' | 'anime';
