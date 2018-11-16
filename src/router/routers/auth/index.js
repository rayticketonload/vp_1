import { ROUTES_CONST } from 'CONFIG';

// 首页
const home = r =>
  require.ensure([], () => r(require('VIEWS/public/home')), 'home');
// 示例
const example = r =>
  require.ensure([], () => r(require('VIEWS/example/example')), 'example');

export default [
  {
    path: `/${ROUTES_CONST.AUTH.HOME}`,
    name: ROUTES_CONST.AUTH.HOME,
    component: home,
    meta: {
      requireAuth: true,
      title: ROUTES_CONST.AUTH.HOME_TITLE,
    },
  },
  {
    path: `/${ROUTES_CONST.AUTH.EXAMPLE}`,
    name: ROUTES_CONST.AUTH.EXAMPLE,
    component: example,
    meta: {
      requireAuth: true,
      title: ROUTES_CONST.AUTH.EXAMPLE_TITLE,
    },
  },
];
