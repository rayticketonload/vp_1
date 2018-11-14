import config from './apiConfig';
// import interceptor from './interceptor';

// 登录，登出，获取验证码
import user from './components/user';

config.use();
// interceptor.use();

export default {
  ...user,
};
