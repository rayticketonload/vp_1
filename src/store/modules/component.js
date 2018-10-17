import { SET_THEME } from '../types';

const state = {
  theme: 'black',
};

const mutations = {
  [SET_THEME]: (state, payload) => {
    state.theme = payload;
  },
};

export default {
  state,
  mutations,
};
