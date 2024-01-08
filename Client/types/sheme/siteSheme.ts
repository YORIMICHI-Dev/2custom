export type schemeSiteType = {
  name: string;
  url: string;
  articles: article[];
};

type article = {
  title: string;
  updated: Date;
  url: string;
};
