export type SidebarMenu = {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: SidebarMenu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
};
