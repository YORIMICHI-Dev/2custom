export type UserProps = {
  name: string;
  email: string;
  role: 'visitor' | 'general' | 'special' | 'admin';
};
