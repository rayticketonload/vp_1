import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { readStorage, saveStorage } from '@UTILS/localStorageControl';
import config from '@/config';
// 导入 iview 自带语言包
import uiZhCN from 'iview/dist/locale/zh-CN'; // 简体中文包
import uiEnUS from 'iview/dist/locale/en-US'; // 美式英语包
// 导入应用语言包
import appZhCN from '@UTILS/lang/app_lang_packs/zh-CN'; // 简体中文包
import appEnUS from '@UTILS/lang/app_lang_packs/en-US'; // 美式英语包

Vue.use(VueI18n);

// 获取本机系统语言
const sysLang = navigator.language;
// 自动设置语言
const localLang =
  sysLang === config.langKeys.zhcn || sysLang === config.langKeys.enus
    ? sysLang
    : false;
const currentlang =
  readStorage(config.storageLangKeyName) || localLang || config.langKeys.zhcn;
// 保存默认语言
saveStorage(config.storageLangKeyName, currentlang);

// 兼容 vue-i18n 6.x+
Vue.locale = () => {};

// 多语言配置
const messages = {
  [`${config.langKeys.zhcn}`]: Object.assign(uiZhCN, appZhCN),
  [`${config.langKeys.enus}`]: Object.assign(uiEnUS, appEnUS),
};

const i18n = new VueI18n({
  locale: currentlang,
  messages,
});

export default i18n;
