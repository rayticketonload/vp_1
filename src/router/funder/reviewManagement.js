import { ASIDE_LEFT } from '@helper/const';

// 我的审核任务
const tasks = r => require(['@pages/reviewManagement/tasks/index'], r);
const tasksNeedReview = r => require(['@pages/reviewManagement/tasks/needReview'], r);
const tasksReviewed = r => require(['@pages/reviewManagement/tasks/reviewed'], r);
const taskDetail = r => require(['@pages/reviewManagement/tasks/detail'], r);
// 任务记录查询
const taskRecordList = r => require(['@pages/reviewManagement/taskRecord/list'], r);
const taskRecordDetail = r => require(['@pages/reviewManagement/taskRecord/detail'], r);
// 审核任务配置
const taskConfigList = r => require(['@pages/reviewManagement/taskConfig/list'], r);
const taskConfigForm = r => require(['@pages/reviewManagement/taskConfig/form'], r);
const taskConfigDetail = r => require(['@pages/reviewManagement/taskConfig/detail'], r);
// 审核任务配置
const postConfigList = r => require(['@pages/reviewManagement/postConfig/list'], r);
const postConfigForm = r => require(['@pages/reviewManagement/postConfig/form'], r);
const postConfigDetail = r => require(['@pages/reviewManagement/postConfig/detail'], r);
// AP 详情
const apDetail = r => require.ensure([], () => r(require('@pages/public/apDetail')), 'apDetail');

export default [
  // 我的审核任务
  {
    path: `/${ASIDE_LEFT.RM_TASKS}`,
    name: ASIDE_LEFT.RM_TASKS,
    redirect: { name: ASIDE_LEFT.RM_TASKS_NEEDREVIEW },
    component: tasks,
    meta: {
      requireAuth: true,
      title: ASIDE_LEFT.RM_TASKS_String,
    },
    children: [
      {
        path: ASIDE_LEFT.RM_TASKS_NEEDREVIEW,
        name: ASIDE_LEFT.RM_TASKS_NEEDREVIEW,
        component: tasksNeedReview,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.RM_TASKS_NEEDREVIEW_String,
        },
      },
      {
        path: ASIDE_LEFT.RM_TASKS_NEEDREVIEW_REVIEW,
        name: ASIDE_LEFT.RM_TASKS_NEEDREVIEW_REVIEW,
        component: taskDetail,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.RM_TASKS_NEEDREVIEW_REVIEW_String,
        },
      },
      {
        path: ASIDE_LEFT.RM_TASKS_REVIEWED,
        name: ASIDE_LEFT.RM_TASKS_REVIEWED,
        component: tasksReviewed,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.RM_TASKS_REVIEWED_String,
        },
      },
      {
        path: ASIDE_LEFT.RM_TASKS_REVIEWED_RESULT,
        name: ASIDE_LEFT.RM_TASKS_REVIEWED_RESULT,
        component: taskDetail,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.RM_TASKS_REVIEWED_RESULT_String,
        },
      },
      {
        path: ASIDE_LEFT.RM_TASKS_APDETAIL,
        name: ASIDE_LEFT.RM_TASKS_APDETAIL,
        component: apDetail,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.RM_TASKS_APDETAIL_String,
        },
      },
    ],
  },
  // 任务记录查询
  {
    path: `/${ASIDE_LEFT.RM_TASKRECORD_LIST}`,
    name: ASIDE_LEFT.RM_TASKRECORD_LIST,
    component: taskRecordList,
    meta: {
      requireAuth: true,
      title: '任务记录查询',
    },
    children: [
      {
        path: ASIDE_LEFT.RM_TASKRECORD_LIST_DETAIL,
        name: ASIDE_LEFT.RM_TASKRECORD_LIST_DETAIL,
        component: taskRecordDetail,
        meta: {
          requireAuth: true,
          title: '查看审核任务',
        },
      },
    ],
  },
  // 审核任务配置
  {
    path: `/${ASIDE_LEFT.RM_TASKCONFIG_LIST}`,
    name: ASIDE_LEFT.RM_TASKCONFIG_LIST,
    component: taskConfigList,
    meta: {
      requireAuth: true,
      title: '审核任务配置',
    },
    children: [
      {
        path: ASIDE_LEFT.RM_TASKCONFIG_LIST_MODIFY,
        name: ASIDE_LEFT.RM_TASKCONFIG_LIST_MODIFY,
        component: taskConfigForm,
        meta: {
          requireAuth: true,
          title: '修改审核任务模板',
        },
      },
      {
        path: ASIDE_LEFT.RM_TASKCONFIG_LIST_CREATE,
        name: ASIDE_LEFT.RM_TASKCONFIG_LIST_CREATE,
        component: taskConfigForm,
        meta: {
          requireAuth: true,
          title: '添加审核任务模板',
        },
      },
      {
        path: ASIDE_LEFT.RM_TASKCONFIG_LIST_DETAIL,
        name: ASIDE_LEFT.RM_TASKCONFIG_LIST_DETAIL,
        component: taskConfigDetail,
        meta: {
          requireAuth: true,
          title: '查看审核任务配置',
        },
      },
    ],
  },
  // 审核岗配置
  {
    path: `/${ASIDE_LEFT.RM_POSTCONFIG_LIST}`,
    name: ASIDE_LEFT.RM_POSTCONFIG_LIST,
    component: postConfigList,
    meta: {
      requireAuth: true,
      title: '审核岗配置',
    },
    children: [
      {
        path: ASIDE_LEFT.RM_POSTCONFIG_LIST_MODIFY,
        name: ASIDE_LEFT.RM_POSTCONFIG_LIST_MODIFY,
        component: postConfigForm,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.RM_POSTCONFIG_LIST_MODIFY_String,
        },
      },
      {
        path: ASIDE_LEFT.RM_POSTCONFIG_LIST_DETAIL,
        name: ASIDE_LEFT.RM_POSTCONFIG_LIST_DETAIL,
        component: postConfigDetail,
        meta: {
          requireAuth: true,
          title: ASIDE_LEFT.RM_POSTCONFIG_LIST_DETAIL_String,
        },
      },
    ],
  },
];
