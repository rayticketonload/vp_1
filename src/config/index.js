// 是否使用国际化，默认为 true
// 如果不使用，则需要在路由中给需要在菜单中展示的路由设置 meta: {title: 'xxx'}
// 用来在菜单中显示文字
const useI18n = true;

// 放到 localstorage 的 key 名字
const storageLangKeyName = 'lang';

// 语种国际名称
const langKeys = {
  zhcn: 'zh-CN',
  enus: 'en-US',
};

// 语种列表
const languages = [
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
const themes = [
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
const storageThemeKeyName = 'theme';

export default {
  useI18n,
  storageLangKeyName,
  langKeys,
  languages,
  themes,
  storageThemeKeyName,
};
