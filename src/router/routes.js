import reviewManagement from './funder/reviewManagement';
import financingManagement from './funder/financingManagement';
import systemManagement from './funder/systemManagement';
// import miscFunder from './funder/misc';

export default [
  ...miscFunder, // 首页，登录，404，邮件外链等
  {
    path: '/app',
    component: r => require.ensure([], () => r(require('@pages/app')), 'app'),
    redirect: 'notFound',
    children: [
      ...reviewManagement, // 审核管理
      ...financingManagement, // 融资管理
      ...systemManagement, // 系统管理
    ],
  },
  {
    path: '*',
    redirect: 'notFound',
  },
];
