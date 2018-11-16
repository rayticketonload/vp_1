import iView from 'iview';
import api from 'API';
import { tokenKeyName } from 'CONFIG';
import { savess, readss, clearss } from 'UTILS/storageControl';
import {
  LOGIN,
  GET_USER_INFO,
  LOGOUT,
  SET_USERNAME,
  SET_USEREMAIL,
  SET_USERID,
} from '../types';

const state = {
  userLogin: false,
  userName: null,
  userEmail: null,
  userId: null,
};

const mutations = {
  // 登录登出
  [LOGIN]: (state) => {
    state.userLogin = true;
  },
  [LOGOUT]: (state) => {
    state.userLogin = false;
  },
  // 用户信息
  [SET_USERNAME]: (state, payload) => {
    state.userName = payload;
  },
  [SET_USEREMAIL]: (state, payload) => {
    state.userEmail = payload;
  },
  [SET_USERID]: (state, payload) => {
    state.userId = payload;
  },
};

const actions = {
  [LOGIN]: async ({ commit }, params) => {
    try {
      const {
        data: {
          name, email, id, msg, result, token,
        },
      } = await api.login(params);
      if (result === 'error') {
        iView.Message.error({
          content: msg,
          duration: 3,
        });
      } else {
        commit(LOGIN);
        commit(SET_USERNAME, name);
        commit(SET_USEREMAIL, email);
        commit(SET_USERID, id);
        savess(tokenKeyName, token);
      }
    } catch (e) {
      iView.Message.error({
        content: e.errorMsg,
        duration: 3,
      });
    }
  },
  [GET_USER_INFO]: async ({ commit }) => {
    const params = {
      token: readss(tokenKeyName),
    };
    try {
      const {
        data: {
          name, email, id, msg, result,
        },
      } = await api.getUserInfo(params);
      if (result === 'error') {
        iView.Message.error({
          content: msg,
          duration: 3,
        });
        commit(LOGOUT);
        clearss();
        return false;
      }
      commit(LOGIN);
      commit(SET_USERNAME, name);
      commit(SET_USEREMAIL, email);
      commit(SET_USERID, id);
      return true;
    } catch (e) {
      iView.Message.error({
        content: e.errorMsg,
        duration: 3,
      });
      commit(LOGOUT);
      clearss();
      return false;
    }
  },
  [LOGOUT]: async ({ commit }, immediate) => {
    if (!immediate) {
      try {
        const {
          data: { msg, result },
        } = await api.logout();
        if (result === 'error') {
          iView.Message.error({
            content: msg,
            duration: 3,
          });
          return;
        }
        commit(LOGOUT);
        clearss();
      } catch (e) {
        iView.Message.error({
          content: e.errorMsg,
          duration: 3,
        });
      }
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
