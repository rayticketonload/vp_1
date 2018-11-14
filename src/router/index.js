import Vue from 'vue';
import VueRouter from 'vue-router';
// import iView from 'iview';
import store from 'STORE';
import { GET_USER_INFO } from 'STORE/types';
import { APP_NAME, tokenKeyName, ROUTER_PUBLIC } from 'CONFIG';
import { readss } from 'UTILS/storageControl';

Vue.use(VueRouter);
/**
 * 不需权限页面
 */
// 登录
const login = r =>
  require.ensure([], () => r(require('VIEWS/public/login')), 'login');
// 404
const page404 = r =>
  require.ensure([], () => r(require('VIEWS/public/page404')), 'page404');
/**
 * 需要权限页面
 */
// 应用页路由阀
const sys = r => require.ensure([], () => r(require('VIEWS/sys')), 'sys');
// 首页
const home = r =>
  require.ensure([], () => r(require('VIEWS/public/home')), 'home');
// 示例
const example = r =>
  require.ensure([], () => r(require('VIEWS/example/example')), 'example');

const router = new VueRouter({
  routes: [
    /**
     *
     * 不需权限页面
     *
     * */
    // 登录页
    {
      path: `/${ROUTER_PUBLIC.LOGIN}`,
      name: ROUTER_PUBLIC.LOGIN,
      component: login,
      meta: {
        title: ROUTER_PUBLIC.LOGIN_TITLE,
      },
    },
    // 404
    {
      path: `/${ROUTER_PUBLIC.PAGE_404}`,
      name: ROUTER_PUBLIC.PAGE_404,
      component: page404,
      meta: {
        title: ROUTER_PUBLIC.PAGE_404,
      },
    },
    /**
     *
     * 需要权限页面
     *
     * */
    // 需要权限页面的集中入口
    {
      path: '/sys',
      component: sys,
      redirect: { name: ROUTER_PUBLIC.HOME },
      children: [
        {
          path: '/',
          name: '/',
          redirect: { name: ROUTER_PUBLIC.HOME },
          meta: {
            requireAuth: true,
          },
        },
        {
          path: `/${ROUTER_PUBLIC.HOME}`,
          name: ROUTER_PUBLIC.HOME,
          component: home,
          meta: {
            requireAuth: true,
            title: ROUTER_PUBLIC.HOME_TITLE,
          },
        },
        {
          path: '/example',
          name: 'example',
          component: example,
          meta: {
            requireAuth: true,
            title: '示例',
          },
        },
      ],
    },
    {
      path: '*',
      redirect: { name: ROUTER_PUBLIC.PAGE_404 },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

const filter = async (to, from, next) => {
  document.title = APP_NAME;

  // iView.LoadingBar.start();

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
          path: `/${ROUTER_PUBLIC.LOGIN}`,
          query: { redirect: to.fullPath },
        });
        break;
      case 2:
        await store.dispatch(GET_USER_INFO);
        next();
        break;
      case 3:
        next({
          path: `/${ROUTER_PUBLIC.LOGIN}`,
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
      // case 1:
      //   next({
      //     path: `/${ROUTER_PUBLIC.LOGIN}`,
      //     query: { redirect: to.fullPath },
      //   });
      //   break;
      // case 2:
      //   await store.dispatch(GET_USER_INFO);
      //   next();
      //   break;
      // case 3:
      //   next({
      //     path: `/${ROUTER_PUBLIC.LOGIN}`,
      //     query: { redirect: to.fullPath },
      //   });
      //   break;
      case 4:
        if (to.name === ROUTER_PUBLIC.LOGIN) {
          next({
            name: ROUTER_PUBLIC.HOME,
          });
        }
        next();
        break;
      default:
        break;
    }
    next();
  }

  // const loginToken = readss(tokenKeyName);
  // console.log('loginToken', loginToken);
  // let loginStatus;

  // if (!store.state.profile.userLogin && !loginToken) {
  //   loginStatus = 1; // 完全没登录过，需要转到登录页面
  // } else if (!store.state.profile.userLogin && loginToken) {
  //   loginStatus = 2; // 有登录过，验证 session 里面的 token有无过期，无过期就标记为登录，然后获取用户信息
  // } else if (store.state.profile.userLogin && !loginToken) {
  //   loginStatus = 3; // 有登录过，但找不到 session 里面的 token，需要转到登录页面重新登录
  // } else if (store.state.profile.userLogin && loginToken) {
  //   loginStatus = 4; // 无须重新登录
  // }

  // console.log('loginStatus', loginStatus);

  // const k = loginStatus;

  // if (k === 1) {
  //   next({
  //     path: `/${ROUTER_PUBLIC.LOGIN}`,
  //     name: ROUTER_PUBLIC.LOGIN,
  //     query: { redirect: to.fullPath },
  //   });
  // }

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

router.beforeEach(filter);
router.afterEach(() => {
  // iView.LoadingBar.finish();
});

// interceptor.use(router);

export default router;

// import Vue from 'vue';
// import Router from 'vue-router';

// const home = r => require.ensure([], () => r(require('VIEWS/public/home')), 'home');
// const example = r => require.ensure([], () => r(require('VIEWS/example/example')), 'example');
// const login = r => require.ensure([], () => r(require('VIEWS/public/login')), 'login');

// Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'example',
//       component: example,
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: login,
//     },
//     {
//       path: '/home',
//       name: 'home',
//       component: home,
//     },
//   ],
// });
