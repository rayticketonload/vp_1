import { FUNDER_PUBLIC_PAGE, SYSTEM_NAME } from '@helper/const';
// 独立资金端登录
const systemHome = r => require.ensure([], () => r(require('@pages/public/systemHome')), 'systemHome');
// 独立资金端登录
const login = r => require.ensure([], () => r(require('@pages/public/login')), 'login');
// 404
const notFound = r => require.ensure([], () => r(require('@pages/public/notfound')), 'notFound');
// 身份验证
const activation = r => require.ensure([], () => r(require('@pages/public/activation')), 'activation');
// 邀请登录
const inviteLogin = r => require.ensure([], () => r(require('@pages/public/inviteLogin')), 'inviteLogin');

export default [
  {
    path: '/',
    name: FUNDER_PUBLIC_PAGE.SYSTEM_HOME,
    component: systemHome,
    meta: {
      requireAuth: true,
      title: SYSTEM_NAME,
    },
  },
  {
    path: `/${FUNDER_PUBLIC_PAGE.ACTIVATION}`,
    name: FUNDER_PUBLIC_PAGE.ACTIVATION,
    component: activation,
    meta: {
      title: '身份验证',
    },
  },
  {
    path: `/${FUNDER_PUBLIC_PAGE.INVITE_LOGIN}`,
    name: FUNDER_PUBLIC_PAGE.INVITE_LOGIN,
    component: inviteLogin,
    meta: {
      title: '邀请登录',
    },
  },
  {
    path: `/${FUNDER_PUBLIC_PAGE.LOGIN}`,
    name: FUNDER_PUBLIC_PAGE.LOGIN,
    component: login,
    meta: {
      title: '资金端管理平台登录',
    },
  },
  {
    path: `/${FUNDER_PUBLIC_PAGE.NOT_FOUND}`,
    name: FUNDER_PUBLIC_PAGE.NOT_FOUND,
    component: notFound,
    meta: {
      title: '404 NOT FOUND',
    },
  },
];
