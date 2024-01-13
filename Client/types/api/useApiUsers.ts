export type LoginUserResponse = {
  id: number;
  email: string;
  colorTheme: string;
  showScrollButton: boolean;
};

export type UpdateUserSettingRequestBody = {
  colorTheme: string;
  showScrollButton: boolean;
};
