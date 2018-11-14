import { ROUTER_PUBLIC } from 'CONFIG';

// 首页
const home = r =>
  require.ensure([], () => r(require('VIEWS/public/home')), 'home');
// 登录
const login = r =>
  require.ensure([], () => r(require('VIEWS/public/login')), 'login');
// 404
const page404 = r =>
  require.ensure([], () => r(require('VIEWS/public/page404')), 'page404');

export default [
  {
    path: '/',
    name: ROUTER_PUBLIC.HOME,
    component: home,
    meta: {
      requireAuth: true,
      title: ROUTER_PUBLIC.HOME_TITLE,
    },
  },
  {
    path: `/${ROUTER_PUBLIC.LOGIN}`,
    name: ROUTER_PUBLIC.LOGIN,
    component: login,
    meta: {
      title: ROUTER_PUBLIC.LOGIN_TITLE,
    },
  },
  {
    path: `/${ROUTER_PUBLIC.PAGE_404}`,
    name: ROUTER_PUBLIC.PAGE_404,
    component: page404,
    meta: {
      title: ROUTER_PUBLIC.PAGE_404,
    },
  },
];
