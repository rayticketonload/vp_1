// 项目名称
export const APP_NAME = 'vuecli3测试项目模板';

// 是否使用国际化，默认为 true
// 如果不使用，则需要在路由中给需要在菜单中展示的路由设置 meta: {title: 'xxx'}
// 用来在菜单中显示文字
export const useI18n = true;

// 放到 localstorage 的 key 名字
export const storageLangKeyName = 'lang';

// 放到 sessionStorage 的 token key 名字
export const tokenKeyName = 'token';

// 语种国际名称
export const langKeys = {
  zhcn: 'zh-CN',
  enus: 'en-US',
};

// 语种列表
export const languages = [
  {
    // 简体中文
    name: '简体中文',
    key: langKeys.zhcn,
  },
  {
    // 美式英语
    name: 'English',
    key: langKeys.enus,
  },
];

// 样式主题列表
export const themes = [
  {
    themeKey: 't1',
  },
  {
    themeKey: 't2',
  },
  {
    themeKey: 't3',
  },
];

// 放到 localstorage 的 key 名字
export const storageThemeKeyName = 'theme';

// 公共页面路由常量 // 登录 // 首页 // 404
export const ROUTER_PUBLIC = {
  LOGIN: 'login',
  LOGIN_TITLE: '登录',
  HOME: 'home',
  HOME_TITLE: '首页',
  PAGE_404: 'page_404',
  PAGE_404_TITLE: 'page not found',
};

export default {
  APP_NAME,
  useI18n,
  storageLangKeyName,
  tokenKeyName,
  langKeys,
  languages,
  themes,
  storageThemeKeyName,
  ROUTER_PUBLIC,
};
