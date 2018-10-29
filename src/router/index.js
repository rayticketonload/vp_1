// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import interceptor from './interceptor';
// import routes from './routes';

// Vue.use(VueRouter);

// const router = new VueRouter({
//   // scrollBehavior: () => ({ y: 0 }),
//   // mode: 'history',
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition;
//     }
//     return { x: 0, y: 0 };
//   },
// });

// interceptor.use(router);

// export default router;


import Vue from 'vue';
import Router from 'vue-router';
import Home from '@VIEWS/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@VIEWS/About.vue'),
    },
  ],
});
