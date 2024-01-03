import {
    CodeIcon,
    BrandGithubIcon,
    UserCircleIcon,
    HistoryIcon,
    HeartIcon,
  } from 'vue-tabler-icons';
import type { SidebarMenu } from '~/types/sidebar';


  const sidebarItem: SidebarMenu[] = [
    { header: 'Dashboard' },
    {
      title: 'Profile',
      icon: UserCircleIcon,
      chipColor: 'surface',
      chipBgColor: 'secondary',
      to: '/dashboard/profile',
    },
    {
      title: 'Skill',
      icon: CodeIcon,
      to: '/dashboard/skill',
    },
    {
      title: 'History',
      icon: HistoryIcon,
      to: '/dashboard/history',
    },
    {
      title: 'Hobby',
      icon: HeartIcon,
      to: '/dashboard/hobby',
    },
    { header: 'Apps' },
    {
      title: 'Repository',
      icon: BrandGithubIcon,
      to: '/apps/github',
      chip: 'New',
      chipColor: 'surface',
      chipBgColor: 'secondary',
    },
]
export default sidebarItem;