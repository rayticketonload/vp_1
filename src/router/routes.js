import { ROUTER_PUBLIC } from 'CONFIG';
import Public from './components/public';
import Example from './components/example';

// 内页路由阀
const sys = r => require.ensure([], () => r(require('VIEWS/sys')), 'sys');

export default [
  ...Public, // 首页，登录，404等
  {
    path: '/sys',
    component: sys,
    redirect: { name: ROUTER_PUBLIC.PAGE_404 },
    children: [
      ...Example,
    ],
  },
  {
    path: '*',
    redirect: { name: ROUTER_PUBLIC.PAGE_404 },
  },
];
