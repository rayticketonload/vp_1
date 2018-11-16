import { ROUTES_CONST } from 'CONFIG';

// 登录
const login = r =>
  require.ensure([], () => r(require('VIEWS/public/login')), 'login');

// 404
const page404 = r =>
  require.ensure([], () => r(require('VIEWS/public/page404')), 'page404');

export default [
  {
    path: '/',
    redirect: { name: ROUTES_CONST.AUTH.HOME },
    meta: {
      requireAuth: true,
      title: ROUTES_CONST.AUTH.HOME_TITLE,
    },
  },
  {
    path: `/${ROUTES_CONST.PUBLIC.LOGIN}`,
    name: ROUTES_CONST.PUBLIC.LOGIN,
    component: login,
    meta: {
      title: ROUTES_CONST.PUBLIC.LOGIN_TITLE,
    },
  },
  {
    path: `/${ROUTES_CONST.PUBLIC.PAGE_404}`,
    name: ROUTES_CONST.PUBLIC.PAGE_404,
    component: page404,
    meta: {
      title: ROUTES_CONST.PUBLIC.PAGE_404,
    },
  },
];
