import axios from 'axios';
import { eraseEmpty } from '../utils';

// 登入 参数传 phone : xxx，verifyCode : xxx
const login = params => axios.post('http://rap2api.taobao.org/app/mock/5653/login', params);

// 获取用户信息
const getUserInfo = (params) => {
  const token = eraseEmpty(params);
  return axios.post('http://rap2api.taobao.org/app/mock/5653/userInfo', token);
};

// 登出
const logout = () => axios.get('http://rap2api.taobao.org/app/mock/5653/logout');

// 获取登录验证码 参数传 phone : xxx
const getVerifyCode = params => axios.post('/api/verifyCode', params);

export default {
  login,
  getUserInfo,
  logout,
  getVerifyCode,
};
