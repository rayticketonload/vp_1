import axios from 'axios';
import { mode, ajaxBaseUrl } from 'CONFIG';

let BASE_URL;

switch (process.env.NODE_ENV) {
  case mode.dev:
    BASE_URL = ajaxBaseUrl.dev;
    break;
  case mode.test:
    BASE_URL = ajaxBaseUrl.test;
    break;
  case mode.prd:
    BASE_URL = ajaxBaseUrl.prd;
    break;
  default:
}

console.log('BASE_URL', BASE_URL);

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.response.use(
  (response) => {
    console.log('response', response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error.response.data);
  },
);

export default instance;

// import { Spin } from 'iview'

// export default {
//   use() {
//     axios.defaults.timeout = 10000;
//     // axios.defaults.baseURL = baseURL;
//     axios.defaults.headers.post['Content-Type'] = 'application/json';
//   },
// };

// class HttpRequest {
//   constructor(baseUrl) {
//     this.baseUrl = baseUrl;
//     this.queue = {};
//   }
//   getInsideConfig() {
//     const config = {
//       baseURL: this.baseUrl,
//       headers: {
//         //
//       },
//     };
//     return config;
//   }
//   destroy(url) {
//     delete this.queue[url];
//     if (!Object.keys(this.queue).length) {
//       // Spin.hide()
//     }
//   }
//   interceptors(instance, url) {
//     // 请求拦截
//     instance.interceptors.request.use((config) => {
//       // 添加全局的loading...
//       if (!Object.keys(this.queue).length) {
//         // Spin.show() // 不建议开启，因为界面不友好
//       }
//       this.queue[url] = true;
//       return config;
//     }, error => Promise.reject(error));
//     // 响应拦截
//     instance.interceptors.response.use((res) => {
//       this.destroy(url);
//       const { data, status } = res;
//       return { data, status };
//     }, (error) => {
//       this.destroy(url);
//       return Promise.reject(error);
//     });
//   }
//   request(options) {
//     const instance = axios.create();
//     options = Object.assign(this.getInsideConfig(), options);
//     this.interceptors(instance, options.url);
//     return instance(options);
//   }
// }
// export default HttpRequest;
