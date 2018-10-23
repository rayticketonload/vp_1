<template>
  <RadioGroup v-model="currentLanguage"
              type="button"
              @on-change="languageChange(currentLanguage)">
    <Radio v-for="(value, index) in LANGUAGE_LIST"
           :key="index"
           :label="value">{{ value }}</Radio>
  </RadioGroup>
</template>

<script>
import { mapState } from 'vuex';
import { RadioGroup, Radio } from 'iview';
import eventbus from '_UTILS/eventbus';
import store from '_STORE';
import {
  SET_LANGUAGE,
  SET_SECTION_LANG_PACK,
  SET_UI_LANG_PACK,
} from '_STORE/types';
import { LANGUAGE_LIST } from '_UTILS/const'; // 引入语种列表
import sectionLangPacks from '_UTILS/section_lang_packs'; // 引入业务模板的语言包
import uiLangPacks from '_UTILS/ui_lang_packs'; // 引入 UI 框架的语言包

export default {
  name: 'languageChange',

  components: {
    Radio,
    RadioGroup,
  },

  computed: {
    ...mapState({
      language: state => state.component.language, // 当前语种环境
    }),
  },

  data() {
    return {
      // 语种列表
      LANGUAGE_LIST,
      // 当前所用语种
      currentLanguage: null,
    };
  },

  methods: {
    languageChange(currentLanguage) {
      store.commit(SET_LANGUAGE, currentLanguage);
      switch (currentLanguage) {
        case LANGUAGE_LIST.zhCN:
          store.commit(SET_SECTION_LANG_PACK, sectionLangPacks.zhCN);
          store.commit(SET_UI_LANG_PACK, uiLangPacks.uiZhCN);
          eventbus.$emit('resetUILang');
          break;
        case LANGUAGE_LIST.enUS:
          store.commit(SET_SECTION_LANG_PACK, sectionLangPacks.enUS);
          store.commit(SET_UI_LANG_PACK, uiLangPacks.uiEnUS);
          eventbus.$emit('resetUILang');
          break;
        default:
          break;
      }
    },
  },

  mounted() {
    this.currentLanguage = this.language;
  },
};
</script>
