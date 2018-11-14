// import iView from 'iview';
import api from 'API';
import { tokenKeyName, ROUTER_PUBLIC } from 'CONFIG';
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
          errorMsg,
          result,
          content: {
            name, email, id, token,
          },
        },
      } = await api.login(params);
      if (result === 'error') {
        // iView.$Message.error(errorMsg);
      } else {
        commit(LOGIN);
        commit(SET_USERNAME, name);
        commit(SET_USEREMAIL, email);
        commit(SET_USERID, id);
        savess(tokenKeyName, token);
      }
    } catch (e) {
      // iView.$Message.info(e.errorMsg);
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
        // iView.$Message.error(errorMsg);
        clearss();
        this.$router.push({
          name: ROUTER_PUBLIC.LOGIN,
        });
      }
      commit(LOGIN);
      commit(SET_USERNAME, name);
      commit(SET_USEREMAIL, email);
      commit(SET_USERID, id);
    } catch (e) {
      // View.$Message.error(e.errorMsg);
    }
  },
  [LOGOUT]: async ({ commit }, immediate) => {
    if (!immediate) {
      try {
        const { errorMsg, result } = await api.logout();
        if (result === 'error') {
          // iView.$Message.error(errorMsg);
        } else {
          commit(LOGOUT);
          clearss();
          this.$router.push({
            name: ROUTER_PUBLIC.LOGIN,
          });
        }
      } catch (e) {
        // iView.$Message.error(e.errorMsg);
      }
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
