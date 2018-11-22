import axios from '../axios';
import { eraseEmpty } from '../utils';

// 登入 参数传 phone : xxx，verifyCode : xxx
const login = (params) => {
  const data = eraseEmpty(params);
  return axios.post('login', data);
};

// 获取用户信息
const getUserInfo = (params) => {
  const data = eraseEmpty(params);
  return axios.post('userInfo', data);
};

// 登出
const logout = () => axios.get('logout');

// 获取登录验证码 参数传 phone : xxx
const getVerifyCode = (params) => {
  const data = eraseEmpty(params);
  return axios.post('verifyCode', data);
};

export default {
  login,
  getUserInfo,
  logout,
  getVerifyCode,
};
