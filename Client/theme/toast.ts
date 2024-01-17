export const loginToast = {
  id: 'login',
  title: 'ログインしてください',
  description: "Let's try まとめカスタマイズ",
  timeout: 2000,
  icon: 'i-heroicons-check-circle',
  ui: {
    progress: {
      base: 'absolute bottom-0 end-0 start-0 h-1',
      background: 'bg-info',
    },
    icon: {
      color: 'info',
    },
  },
};

export const logoutToast = {
  id: 'logout',
  title: 'ログアウトしました',
  description: 'See you',
  timeout: 2000,
  icon: 'i-heroicons-check-circle',
  ui: {
    progress: {
      base: 'absolute bottom-0 end-0 start-0 h-1',
      background: 'bg-info',
    },
    icon: {
      color: 'info',
    },
  },
};

export const successLoginToast = {
  id: 'success_login',
  title: 'ログインしました',
  description: "Let's enjoy",
  timeout: 2000,
  icon: 'i-heroicons-check-circle',
  ui: {
    progress: {
      base: 'absolute bottom-0 end-0 start-0 h-1',
      background: 'bg-success',
    },
    icon: {
      color: 'success',
    },
  },
};

export const successFormToast = {
  id: 'success_login',
  title: 'お問い合わせを送信しました',
  timeout: 2000,
  icon: 'i-heroicons-check-circle',
  ui: {
    progress: {
      base: 'absolute bottom-0 end-0 start-0 h-1',
      background: 'bg-success',
    },
    icon: {
      color: 'success',
    },
  },
};
