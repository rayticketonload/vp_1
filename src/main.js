import Vue from 'vue';
import iView from 'iview';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import i18n from '_UTILS/lang';
import config from '@/config';
// import * as filters from '_UTILS/filter';
import 'iview/dist/styles/iview.css';

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value),
});

// 生产环境关掉提示
Vue.config.productionTip = false;

// 全局注册应用配置
Vue.prototype.$config = config;

// Object.keys(filters).forEach((key) => {
//   Vue.filter(key, filters[key]);
// });

new Vue({
  router,
  store,
  i18n,
  render: vp => vp(App),
}).$mount('#app');
