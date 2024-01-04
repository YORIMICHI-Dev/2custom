export type siteType = {
  name: string;
  url: string;
  rssUrl: string;
  category: Category;
  categoryColor: string;
};

type Category = 'chat' | 'sports' | 'adult' | 'VTuber';
