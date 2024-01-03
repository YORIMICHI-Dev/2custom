import {
  ListDetailsIcon,
  Home2Icon,
  SettingsIcon,
  MailCheckIcon,
} from 'vue-tabler-icons';
import type { SidebarMenu } from '@/types/layout/sidebar';

const sidebarItem: SidebarMenu[] = [
  { header: 'View' },
  {
    title: 'ホーム',
    icon: Home2Icon,
    chipColor: 'surface',
    chipBgColor: 'secondary',
    to: '/',
  },
  {
    title: 'カスタム',
    icon: ListDetailsIcon,
    to: '/custom',
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
