import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/page',
      component: '@/layouts/LoginLayout',
      routes: [
        {
          path: 'login',
          component: '@/pages/Login',
        },
        {
          path: 'register',
          component: '@/pages/Register',
        },
      ],
    },
    {
      component: '@/layouts/Index',
      path: '/backend',
      routes: [
        {
          path: 'index',
          component: '@/pages/Index',
          wrappers: ['@/wrappers/Auth'],
        },
        {
          path: 'normal',
          component: '@/pages/mgr/normal/NormalMgr',
          wrappers: ['@/wrappers/Auth'],
        },
        {
          path: '403',
          component: '@/pages/exception/Page403',
        },
        {
          path: '500',
          component: '@/pages/exception/Page500',
        },
        {
          path: 'i18n/language',
          component: '@/pages/I18nMgr/I18nLanguage/I18nLanguageMgr',
        },
      ],
    },
    {
      component: '@/pages/exception/Page404',
    },
  ],
});
