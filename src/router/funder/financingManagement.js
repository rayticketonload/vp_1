import { ASIDE_LEFT } from '@helper/const';

// 融资申请管理
const financingList = r => require(['@pages/financingManagement/financing/list'], r);
const financingDetail = r => require(['@pages/financingManagement/financing/detail'], r);
// 放款管理
const loanList = r => require(['@pages/financingManagement/loan/list'], r);
const loanDetail = r => require(['@pages/financingManagement/loan/detail'], r);
// AP 详情
const apDetail = r => require.ensure([], () => r(require('@pages/public/apDetail')), 'apDetail');

export default [
  // 融资申请管理
  {
    path: `/${ASIDE_LEFT.FM_FINANCING_LIST}`,
    name: ASIDE_LEFT.FM_FINANCING_LIST,
    component: financingList,
    meta: {
      requireAuth: true,
      title: ASIDE_LEFT.FM_FINANCING_LIST_String,
    },
    children: [
      {
        path: ASIDE_LEFT.FM_FINANCING_APDETAIL,
        name: ASIDE_LEFT.FM_FINANCING_APDETAIL,
        component: apDetail,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.FM_FINANCING_APDETAIL_String,
        },
      },
      {
        path: ASIDE_LEFT.FM_FINANCING_LIST_DETAIL,
        name: ASIDE_LEFT.FM_FINANCING_LIST_DETAIL,
        component: financingDetail,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.FM_FINANCING_LIST_DETAIL_String,
        },
      },
    ],
  },
  // 放款管理
  {
    path: `/${ASIDE_LEFT.FM_LOAN_LIST}`,
    name: ASIDE_LEFT.FM_LOAN_LIST,
    component: loanList,
    meta: {
      requireAuth: true,
      title: ASIDE_LEFT.FM_LOAN_LIST_String,
    },
    children: [
      {
        path: ASIDE_LEFT.FM_LOAN_APDETAIL,
        name: ASIDE_LEFT.FM_LOAN_APDETAIL,
        component: apDetail,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.FM_LOAN_APDETAIL_String,
        },
      },
      {
        path: ASIDE_LEFT.FM_LOAN_LIST_DETAIL,
        name: ASIDE_LEFT.FM_LOAN_LIST_DETAIL,
        component: loanDetail,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.FM_LOAN_LIST_DETAIL_String,
        },
      },
    ],
  },
];
