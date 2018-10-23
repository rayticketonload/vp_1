import Vue from 'vue';
// import * as filters from '_UTILS/filter';
import 'iview/dist/styles/iview.css';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

// Object.keys(filters).forEach((key) => {
//   Vue.filter(key, filters[key]);
// });

new Vue({
  router,
  store,
  render: vp => vp(App),
}).$mount('#app');
