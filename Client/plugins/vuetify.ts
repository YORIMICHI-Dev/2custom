// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Loading scss
import '@/assets/scss/main.scss';

// Custom theme
import {
  BLUE_THEME,
  AQUA_THEME,
  PURPLE_THEME,
  GREEN_THEME,
  CYAN_THEME,
  ORANGE_THEME,
} from '@/theme/LightTheme';
import {
  DARK_BLUE_THEME,
  DARK_AQUA_THEME,
  DARK_ORANGE_THEME,
  DARK_PURPLE_THEME,
  DARK_GREEN_THEME,
  DARK_CYAN_THEME,
} from '@/theme/DarkTheme';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
    },
    directives,
    theme: {
      defaultTheme: 'BLUE_THEME',
      themes: {
        BLUE_THEME,
        AQUA_THEME,
        PURPLE_THEME,
        GREEN_THEME,
        CYAN_THEME,
        ORANGE_THEME,
        DARK_BLUE_THEME,
        DARK_AQUA_THEME,
        DARK_ORANGE_THEME,
        DARK_PURPLE_THEME,
        DARK_GREEN_THEME,
        DARK_CYAN_THEME,
      },
    },
    defaults: {
      VCard: {
        rounded: 'md',
        elevation: 10,
      },

      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
      },
      VTextarea: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
      },
      VListItem: {
        minHeight: '45px',
      },
      VTooltip: {
        location: 'top',
      },
      VBtn: {
        style: 'text-transform: capitalize; letter-spacing:0',
        rounded: 'md',
      },
    },
  });

  app.vueApp.use(vuetify);
});
