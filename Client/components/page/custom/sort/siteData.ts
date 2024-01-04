const getStatusColor = (status: string) => {
  switch (status) {
    case 'chat':
      return 'primary';
    case 'adult':
      return 'error';
    case 'VTuber':
      return 'info';
    default:
      return 'grey-200';
  }
};

// Register Site List
export const registerList = [
  {
    name: '資格ちゃんねる',
    url: 'Xtreme admin',
    status: 'chat',
    statusColor: getStatusColor('chat'),
  },
  {
    name: 'ゴールデンタイムズ',
    url: 'Adminpro admin',
    status: 'adult',
    statusColor: getStatusColor('adult'),
  },
  {
    name: 'ハム速',
    url: 'Monster admin',
    status: 'VTuber',
    statusColor: getStatusColor('VTuber'),
  },
];
