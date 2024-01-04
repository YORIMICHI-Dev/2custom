import {
  ListDetailsIcon,
  Home2Icon,
  SettingsIcon,
  MailCheckIcon,
  SelectIcon,
} from 'vue-tabler-icons';
import type { SidebarMenu } from '@/types/layout/sidebar';

const sidebarItem: SidebarMenu[] = [
  { header: 'MENU' },
  {
    title: 'ホーム',
    icon: Home2Icon,
    chipColor: 'surface',
    chipBgColor: 'secondary',
    to: '/',
  },
  {
    title: '並べ替え',
    icon: ListDetailsIcon,
    to: '/custom/sort',
  },
  {
    title: 'サイト選択',
    icon: SelectIcon,
    to: '/custom/select',
  },
  {
    title: 'ユーザー設定',
    icon: SettingsIcon,
    to: '/setting',
  },
  {
    title: 'フォーム',
    icon: MailCheckIcon,
    to: '/form',
  },
];
export default sidebarItem;
