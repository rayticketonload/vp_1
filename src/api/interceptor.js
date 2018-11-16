import axios from 'axios';
// import store from 'STORE';
// import router from 'ROUTER';
// import getPathName from 'UTILS/getPathName';
// import { LOGOUT } from 'STORE/types';
// import { ROUTES_CONST } from 'CONFIG';
// import whiteList from './whiteList';

export default {
  use() {
    axios.interceptors.response.use(
      (response) => {
        // const {
        //   content,
        //   result,
        //   errorMsg,
        //   intErrorCode,
        //   errorCode,
        // } = response.data;
        // const { url } = response.config;
        // const pathname = getPathName(url);

        // response = Object.assign({}, response, {
        //   content,
        //   result,
        //   errorMsg,
        //   intErrorCode,
        //   errorCode,
        // });

        // const isPass = whiteList.some((val) => {
        //   if (typeof val === 'string') {
        //     return val === pathname;
        //   }
        //   return val.test(pathname);
        // });

        // if (result === 'error') {
        //   if (!isPass && errorMsg) {
        //     this.$Message.error(errorMsg);
        //   } else {
        //     return Promise.reject({
        //       errorMsg,
        //       errorCode: intErrorCode,
        //       code: errorCode,
        //     });
        //   }
        // }
        // return response;
      },
      (err) => {
        // if (err && err.response) {
        //   const status = err.response.status;

        //   if (status === 401 || status === 403 || status === 502) {
        //     store.dispatch(LOGOUT);
        //     router.replace({
        //       name: ROUTER_PUBLIC.LOGIN,
        //       query: {
        //         redirect: router.currentRoute.fullPath,
        //       },
        //     });
        //   }
        //   if (status >= 400) {
        //     return Promise.reject({ errorMsg: '请求出错！' });
        //   }
        // }
        // return Promise.reject({
        //   errorMsg: '请求超时或未联网，请检查网络连接！',
        // });
      },
    );
  },
};
