import { ROUTES_CONST } from 'CONFIG';
import publicRoutes from './public/';
import authRoutes from './auth/';

// 权限页面路由阀
const sys = r => require.ensure([], () => r(require('VIEWS/sys')), 'sys');

export default [
  ...publicRoutes,
  {
    path: '/sys',
    component: sys,
    redirect: { name: ROUTES_CONST.AUTH.HOME },
    children: [...authRoutes],
  },
  {
    path: '*',
    redirect: { name: ROUTES_CONST.PUBLIC.PAGE_404 },
  },
];
