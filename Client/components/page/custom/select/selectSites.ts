import type { siteType } from '@/types/site/siteType';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'chat':
      return 'primary';
    case 'adult':
      return 'error';
    case 'VTuber':
      return 'info';
    case 'anime':
      return 'secondary';
    default:
      return 'grey-200';
  }
};

export const selectSites: siteType[] = [
  {
    name: '資格ちゃんねる',
    url: 'http://shikaku2ch.doorblog.jp/',
    rssUrl: 'http://shikaku2ch.doorblog.jp/index.rdf',
    category: 'chat',
    categoryColor: getStatusColor('chat'),
  },
  {
    name: 'ゴールデンタイムズ',
    url: 'http://blog.livedoor.jp/goldennews/',
    rssUrl: 'http://blog.livedoor.jp/goldennews/index.rdf',
    category: 'chat',
    categoryColor: getStatusColor('chat'),
  },
  {
    name: 'ハム速',
    url: 'https://hamusoku.com/',
    rssUrl: 'https://hamusoku.com/index.rdf',
    category: 'chat',
    categoryColor: getStatusColor('chat'),
  },
  {
    name: 'キニ速',
    url: 'http://blog.livedoor.jp/kinisoku/',
    rssUrl: 'http://blog.livedoor.jp/kinisoku/index.rdf',
    category: 'chat',
    categoryColor: getStatusColor('chat'),
  },
  {
    name: 'ブラブラブラウジング',
    url: 'http://brow2ing.com/',
    rssUrl: 'http://brow2ing.com/index.rdf',
    category: 'chat',
    categoryColor: getStatusColor('chat'),
  },
  {
    name: 'BIPブログ',
    url: 'http://bipblog.com/',
    rssUrl: 'http://bipblog.com/index.rdf',
    category: 'chat',
    categoryColor: getStatusColor('chat'),
  },
  {
    name: 'ちゃんねるZ',
    url: 'http://channelz.blog.fc2.com/',
    rssUrl: 'http://channelz.blog.fc2.com/?xml',
    category: 'chat',
    categoryColor: getStatusColor('chat'),
  },
  {
    name: '不思議.net',
    url: 'http://world-fusigi.net/',
    rssUrl: 'http://world-fusigi.net/index.rdf',
    category: 'chat',
    categoryColor: getStatusColor('chat'),
  },
  {
    name: 'IT速報',
    url: 'http://blog.livedoor.jp/itsoku/',
    rssUrl: 'http://blog.livedoor.jp/itsoku/index.rdf',
    category: 'chat',
    categoryColor: getStatusColor('chat'),
  },

  // anime
  {
    name: 'ぴこ速',
    url: 'https://pioncoo.net/',
    rssUrl: 'https://pioncoo.net/feed',
    category: 'anime',
    categoryColor: getStatusColor('anime'),
  },
];
