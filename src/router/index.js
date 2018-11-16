import Vue from 'vue';
import VueRouter from 'vue-router';
import i18n from 'UTILS/lang';
import iView from 'iview';
import store from 'STORE';
import { GET_USER_INFO } from 'STORE/types';
import { APP_NAME, tokenKeyName, ROUTES_CONST } from 'CONFIG';
import { readss } from 'UTILS/storageControl';
import routes from './routers';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

const filter = async (to, from, next) => {
  document.title = APP_NAME;

  iView.LoadingBar.start();

  if (to.meta.title) {
    document.title = to.meta.title;
  }

  const { userLogin } = store.state.profile;
  const loginToken = readss(tokenKeyName);
  let loginStatus;

  if (!userLogin && !loginToken) {
    loginStatus = 1; // 完全没登录过，需要转到登录页面
  } else if (!userLogin && loginToken) {
    loginStatus = 2; // 有登录过，验证 session 里面的 token有无过期，无过期就标记为登录，然后获取用户信息
  } else if (userLogin && !loginToken) {
    loginStatus = 3; // 有登录过，但找不到 session 里面的 token，需要转到登录页面重新登录获取 token
  } else if (userLogin && loginToken) {
    loginStatus = 4; // 无须重新登录
  }

  console.log('loginStatus', loginStatus);

  if (to.matched.some(res => res.meta.requireAuth)) {
    switch (loginStatus) {
      case 1:
        next({
          path: `/${ROUTES_CONST.PUBLIC.LOGIN}`,
          query: { redirect: to.fullPath },
        });
        break;
      case 2:
        if (!(await store.dispatch(GET_USER_INFO))) {
          iView.Message.error({
            content: i18n.t('routerSection.message.tokenError'),
            duration: 3,
          });
          next({
            path: `/${ROUTES_CONST.PUBLIC.LOGIN}`,
            query: { redirect: to.fullPath },
          });
          return;
        }
        next();
        break;
      case 3:
        iView.Message.error({
          content: i18n.t('routerSection.message.tokenError'),
          duration: 3,
        });
        next({
          path: `/${ROUTES_CONST.PUBLIC.LOGIN}`,
          query: { redirect: to.fullPath },
        });
        break;
      case 4:
        next();
        break;
      default:
        break;
    }
  } else {
    switch (loginStatus) {
      case 1:
        next();
        break;
      case 2:
        next();
        break;
      case 3:
        next();
        break;
      case 4:
        if (to.name === ROUTES_CONST.PUBLIC.LOGIN) {
          next({
            name: ROUTES_CONST.AUTH.HOME,
          });
          return;
        }
        next();
        break;
      default:
        break;
    }
  }
};

router.beforeEach(filter);
router.afterEach(() => {
  iView.LoadingBar.finish();
});

export default router;
