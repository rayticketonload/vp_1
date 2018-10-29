import Vue from 'vue';
import iView from 'iview';
import i18n from '@UTILS/lang';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import config from '@/config';
import * as directives from '@/directives';
// import * as filters from '@UTILS/filter';
import 'iview/dist/styles/iview.css';
import '@/style/var_t1.less';

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

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});

new Vue({
  router,
  store,
  i18n,
  render: vp => vp(App),
}).$mount('#app');
