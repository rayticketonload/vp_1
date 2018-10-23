import { LANGUAGE_LIST, THEME_LIST } from '_UTILS/const';
import SECTION_LANG_PACKS from '_UTILS/section_lang_packs'; // 引入业务模板的语言包
import UI_LANG_PACKS from '_UTILS/ui_lang_packs'; // 引入 UI 框架的语言包
import { SET_THEME, SET_LANGUAGE, SET_SECTION_LANG_PACK, SET_UI_LANG_PACK } from '../types';

const state = {
  theme: THEME_LIST.style1,
  language: LANGUAGE_LIST.zhCN,
  currentSectionLangPack: SECTION_LANG_PACKS.zhCN,
  currentUILangPack: UI_LANG_PACKS.uiZhCN,
};

const mutations = {
  [SET_THEME]: (state, payload) => {
    state.theme = payload;
  },
  [SET_LANGUAGE]: (state, payload) => {
    state.language = payload;
  },
  [SET_SECTION_LANG_PACK]: (state, payload) => {
    state.currentSectionLangPack = payload;
  },
  [SET_UI_LANG_PACK]: (state, payload) => {
    state.currentUILangPack = payload;
  },
};

export default {
  state,
  mutations,
};
