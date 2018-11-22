import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import interceptor from './interceptor';
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

router.beforeEach(interceptor);
router.afterEach(() => {
  iView.LoadingBar.finish();
});

export default router;
