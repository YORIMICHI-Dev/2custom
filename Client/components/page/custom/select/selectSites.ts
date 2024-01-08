export type SelectSiteType = {
  category: string;
  sites: SiteType[];
};

export type SiteType = {
  name: string;
  url: string;
  selected: boolean;
};

export const selectSites: SelectSiteType[] = [
  {
    category: 'VIP',
    sites: [
      {
        name: '資格ちゃんねる',
        url: 'http://shikaku2ch.doorblog.jp/',
        selected: true,
      },
      {
        name: 'ゴールデンタイムズ',
        url: 'http://blog.livedoor.jp/goldennews/',
        selected: true,
      },
      {
        name: 'ハム速',
        url: 'https://hamusoku.com/',
        selected: true,
      },
      {
        name: 'キニ速',
        url: 'http://blog.livedoor.jp/kinisoku/',
        selected: true,
      },
      {
        name: 'ブラブラブラウジング',
        url: 'http://brow2ing.com/',
        selected: true,
      },
      {
        name: 'BIPブログ',
        url: 'http://bipblog.com/',
        selected: true,
      },
      {
        name: 'ちゃんねるZ',
        url: 'http://channelz.blog.fc2.com/',
        selected: true,
      },
      {
        name: '不思議.net',
        url: 'http://world-fusigi.net/',
        selected: true,
      },
      {
        name: 'IT速報',
        url: 'http://blog.livedoor.jp/itsoku/',
        selected: false,
      },
    ],
  },
  {
    category: 'ニュース',
    sites: [],
  },
  {
    category: '生活',
    sites: [],
  },
  {
    category: 'アニメ',
    sites: [],
  },
  {
    category: 'ゲーム',
    sites: [],
  },
  {
    category: '漫画',
    sites: [],
  },
  {
    category: 'VTuber',
    sites: [],
  },
  {
    category: 'ポケモン',
    sites: [],
  },
  {
    category: '食べ物',
    sites: [],
  },
  {
    category: 'ガジェット',
    sites: [],
  },
  {
    category: '野球',
    sites: [],
  },
  {
    category: 'ギャンブル',
    sites: [],
  },
];
