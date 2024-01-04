export type SettingProps = {
  actTheme: string;
  format: 'list' | 'gather';
  articleLines: number;
  siteNum: number;
  role: 'visitor' | 'general' | 'special' | 'admin';
  scrollButton: boolean;
};
