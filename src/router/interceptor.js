import Vue from 'vue';
import iView from 'iview';
import Router from 'vue-router';
import store from 'STORE';
import { GET_USER_INFO } from 'STORE/types';
import { APP_NAME, tokenKeyName, ROUTER_PUBLIC } from 'CONFIG';
import { readss } from 'UTILS/storageControl';

Vue.use(Router);

const filter = async (to, from, next) => {
  document.title = APP_NAME;
  // iView.LoadingBar.start();

  // iView.LoadingBar.finish();
  // next();
  const loginToken = readss(tokenKeyName);
  console.log('loginToken', loginToken);
  let loginStatus;

  if (!store.state.profile.userLogin && !loginToken) {
    loginStatus = 1; // 完全没登录过，需要转到登录页面
  } else if (!store.state.profile.userLogin && loginToken) {
    loginStatus = 2; // 有登录过，验证 session 里面的 token有无过期，无过期就标记为登录，然后获取用户信息
  } else if (store.state.profile.userLogin && !loginToken) {
    loginStatus = 3; // 有登录过，但找不到 session 里面的 token，需要转到登录页面重新登录
  } else if (store.state.profile.userLogin && loginToken) {
    loginStatus = 4; // 无须重新登录
  }

  console.log('loginStatus', loginStatus);

  const k = loginStatus;

  if (k === 1) {
    next({
      path: `/${ROUTER_PUBLIC.LOGIN}`,
      name: ROUTER_PUBLIC.LOGIN,
      query: { redirect: to.fullPath },
    });
  }

  // switch (loginStatus) {
  //   case 1:
  //     // iView.LoadingBar.finish();
  //     next({
  //       name: ROUTER_PUBLIC.LOGIN,
  //     });
  //     break;
  //   default:
  //     next();
  //     break;
  //   // case 2:
  //   //   // iView.LoadingBar.finish();
  //   //   await store.dispatch(GET_USER_INFO);
  //   //   break;
  //   // case 3:
  //   //   // iView.LoadingBar.finish();
  //   //   next({
  //   //     name: ROUTER_PUBLIC.LOGIN,
  //   //   });
  //   //   // iView.Message.error('登录超时，请重新登录');
  //   //   break;
  //   // case 4:
  //   //   if (to.name === ROUTER_PUBLIC.LOGIN) {
  //   //     // iView.LoadingBar.finish();
  //   //     next({
  //   //       name: ROUTER_PUBLIC.HOME,
  //   //     });
  //   //     return;
  //   //   }
  //   //   // iView.LoadingBar.finish();
  //   //   next();
  //   //   break;
  // }
};

Router.beforeEach(filter);
Router.afterEach(() => {
  // iView.LoadingBar.finish();
});

export default router;
