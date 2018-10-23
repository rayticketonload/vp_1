import Vue from 'vue';
import VueRouter from 'vue-router';
import interceptor from './interceptor';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  // scrollBehavior: () => ({ y: 0 }),
  // mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

interceptor.use(router);

export default router;
