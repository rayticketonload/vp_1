import { ASIDE_LEFT } from '@helper/const';

// 业务员管理
const clerkList = r => require(['@pages/systemManagement/clerk/list'], r);
const clerkDetail = r => require(['@pages/systemManagement/clerk/detail'], r);
const clerkForm = r => require(['@pages/systemManagement/clerk/form'], r);
// 权限组管理
const authorList = r => require(['@pages/systemManagement/author/list'], r);
const authorAssign = r => require(['@pages/systemManagement/author/form'], r);
// 机构管理
const archorList = r => require(['@pages/systemManagement/archorList'], r);
// 操作日志
const systemLog = r => require(['@pages/systemManagement/log'], r);
// 证书申请
const certApplyList = r => require(['@pages/systemManagement/certApplyList'], r);
// 修改登录密码
const modifyLoginPassword = r => require(['@pages/systemManagement/modifyLoginPassword'], r);

export default [
  // 业务员管理
  {
    path: `/${ASIDE_LEFT.SM_CLERK_LIST}`,
    name: ASIDE_LEFT.SM_CLERK_LIST,
    component: clerkList,
    meta: {
      requireAuth: true,
      title: '业务员管理',
    },
    children: [
      {
        path: ASIDE_LEFT.SM_CLERK_LIST_DETAIL,
        name: ASIDE_LEFT.SM_CLERK_LIST_DETAIL,
        component: clerkDetail,
        meta: {
          requireAuth: true,
          title: '查看账号信息',
        },
      },
      {
        path: ASIDE_LEFT.SM_CLERK_LIST_CREATE,
        name: ASIDE_LEFT.SM_CLERK_LIST_CREATE,
        component: clerkForm,
        meta: {
          requireAuth: true,
          title: '创建业务员',
        },
      },
      {
        path: ASIDE_LEFT.SM_CLERK_LIST_MODIFY,
        name: ASIDE_LEFT.SM_CLERK_LIST_MODIFY,
        component: clerkForm,
        meta: {
          requireAuth: true,
          title: '修改业务员',
        },
      },
    ],
  },
  // 权限组管理
  {
    path: `/${ASIDE_LEFT.SM_AUTHOR_LIST}`,
    name: ASIDE_LEFT.SM_AUTHOR_LIST,
    component: authorList,
    meta: {
      requireAuth: true,
      title: '权限组管理',
    },
    children: [
      {
        path: ASIDE_LEFT.SM_AUTHOR_LIST_ASSIGN,
        name: ASIDE_LEFT.SM_AUTHOR_LIST_ASSIGN,
        component: authorAssign,
        meta: {
          requireAuth: true,
          title: '功能权限分配',
        },
      },
    ],
  },
  // 机构管理
  {
    path: `/${ASIDE_LEFT.SM_ARCHORLIST}`,
    name: ASIDE_LEFT.SM_ARCHORLIST,
    component: archorList,
    meta: {
      requireAuth: true,
      title: '机构管理',
    },
  },
  // 操作日志
  {
    path: `/${ASIDE_LEFT.SM_SYSTEMLOG}`,
    name: ASIDE_LEFT.SM_SYSTEMLOG,
    component: systemLog,
    meta: {
      requireAuth: true,
      title: '操作日志',
    },
  },
  // 证书申请
  {
    path: `/${ASIDE_LEFT.SM_CERTAPPLYLIST}`,
    name: ASIDE_LEFT.SM_CERTAPPLYLIST,
    component: certApplyList,
    meta: {
      requireAuth: true,
      title: '证书申请',
    },
  },
  // 修改登录密码
  {
    path: `/${ASIDE_LEFT.SM_MODIFYLOGINPASSWORD}`,
    name: ASIDE_LEFT.SM_MODIFYLOGINPASSWORD,
    component: modifyLoginPassword,
    meta: {
      requireAuth: true,
      title: '修改登录密码',
    },
  },
];
