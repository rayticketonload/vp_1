// 项目运行模式
export const mode = {
  dev: 'development',
  test: 'test',
  prd: 'production',
};

// 项目接口地址
export const ajaxBaseUrl = {
  dev: 'http://rap2api.taobao.org/app/mock/5653/',
  test: 'http://test.taobao.org/app/mock/5653/',
  pro: 'http://pro.taobao.org/app/mock/5653/',
};

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

// 路由常量
export const ROUTES_CONST = {
  PUBLIC: {
    LOGIN: 'login',
    LOGIN_TITLE: '登录',
    PAGE_404: 'page_404',
    PAGE_404_TITLE: 'page not found',
  },
  AUTH: {
    EXAMPLE: 'example',
    EXAMPLE_TITLE: '示例',
    HOME: 'home',
    HOME_TITLE: '首页',
  },
};

export default {
  mode,
  ajaxBaseUrl,
  APP_NAME,
  useI18n,
  storageLangKeyName,
  tokenKeyName,
  langKeys,
  languages,
  themes,
  storageThemeKeyName,
  ROUTES_CONST,
};

section: {
  eagreement: {
    contractListModal: {
      notice1: '即将阅读并短信验证以签署如下协议：',
      submitBtnText: '确认，去签署协议',
      createdApTitle: '确认提交AP',
      createdApP1: '供应商确认后即可用其发起支付和融资申请，',
      createdApP2: '是否确认提交本笔AP？',
      tapPayTitle: 'TAP支付协议',
      tapDiscountTitle: 'TAP融资协议',
      tapReceiveTitle: '确认接收TAP',
      tapReceiveP1: '接收后即可用其发起支付和融资申请，',
      tapReceiveP2: '是否确认接收本笔TAP?',
      tapPassTitle: '确认通过TAP',
      tapPassP1: '确认后即可用其发起支付和融资申请，',
      tapPassP2: '是否确认通过本笔TAP？',
      tapAcceptTitle: '确认接受融资申请',
      tapAcceptP1: '接受融资申请将放款给供应商，是否确认接受？',
      tapConfirmTitle: 'TAP兑付确认',
      tapConfirmP1: '您正在确认兑付还款人，是否确认提交？',
    },
    verifyCodeModal: {
      title: '签署电子协议',
      notice1: '确认签署如上协议，将发送短信到安心签注册手机',
      placeholder: '请输入短信验证码',
      submitBtnText: '确认签署',
    },
    resultModal: {
      title: '提示',
      succMsg: '提交成功',
    },
  },
  flatagreement: {
    notice1: '我已阅读并同意以下协议',
    errorMsg: '暂时无法显示协议内容',
    reason: '原因',
  },
  multiAgreement: {
    iAmount: {
      title: '剩余发行额度不足',
      notice1: '请减少AP数量再提交',
      notice2: '剩余发行额度（元）',
      notice3: '当前待提交金额（元）',
      confirmBtnText: '确认',
    },
    supplierIAmount: {
      title: '剩余发行额度不足',
      notice1: '以下供应商剩余接收TAP额度不足，请修改后再提交',
      confirmBtnText: '确认',
    },
    showAudit: {
      title: '批量提交AP',
      // 整句提示，包含数据嵌套
      // 原句：已选中 {N} 条记录，累计金额 {N} 元，确认提交所选AP？
      notice1: {
        // 常量中可以传空字符串，例如 section1: '',
        section1: '已选中',
        section2: '条记录，',
        section3: '累计金额',
        section4: '元',
        section5: '，确认提交所选AP？',
      },
      notice2: '即将阅读并短信验证签署如下协议',
      expired: '已到期',
      days: '天',
      submitBtnText: '确认提交，去签署协议',
    },
    preview: {
      title: '协议',
      apNo: 'AP编号',
      nextContract: '阅读下一份协议',
      notice1: '我已阅读并同意以上全部协议',
    },
    verifyCode: {
      title: '签署电子协议',
      notice1: '确认签署如上协议，将发送短信到安心签注册手机',
      placeholder: '请输入短信验证码',
      confirmBtnText: '确认签署',
    },
    resultModal: {
      succeeMsg: '提交成功',
    },
    SUPPLIER_HANDER: {
      label1: '接收供应商',
      label2: '剩余接收额度(元)',
      label3: '待提交金额(元)',
    },
    AUDIT_HANDER: {
      label1: 'AP编号',
      label2: 'AP内部编号',
      label3: '接收供应商',
      label4: '到期付款金额(元)',
      label5: '预计付款日',
      label6: '剩余期限',
    },
    sec: '秒',
  },
  nocert: {
    title: '尚未申请数字证书',
    notice1: '您需要在交易前申请数字证书，以使用电子签章',
    btnText: '去申请',
  },
  polling: {
    notice1: '批量创建 AP 中...',
  },
  agreement: {
    nextContract: '阅读下一份协议',
    notice1: '我已阅读并确认以上协议',
    errorMsg: '系统错误，请重试',
  },
  tapcert: {
    title: '需开通TAP业务服务',
    notice1: '您需要在交易前开通TAP业务服务',
    notice2: '即将阅读并短信验证以签署如下协议',
    cancelBtnText: '取消',
    confirmBtnText: '确认开通，去签署协议',
    contractName: 'TAP业务开通协议',
  },
  tapcertificate: {
    title: 'TAP凭证',
    label1: 'TAP编号',
    label2: 'TAP金额',
    label3: 'AP承兑金额',
    label4: 'TAP状态',
    label5: 'TAP平台主体评级',
    label6: '到期日期',
    label7: '签发日期',
    label8: '生效日期',
    promisePay: '承诺付款企业',
    label9: '企业名称',
    label10: '统一社会信用代码',
    label11: '企业账户',
    label12: '开户银行',
    label13: '承兑方承诺',
    notice1: '到期无条件付款',
    debts: '第一手债权企业',
    notice2: '待L1确认中，当前为预览版协议',
    notice3: 'AP发行失败，此为预览版协议',
  },
  tapdetail: {
    label1: 'TAP编号',
    label2: 'TAP平台主体评级',
    label3: 'TAP金额',
    label4: '预计付款日',
    label5: 'TAP状态',
    label6: '拒绝理由',
    label7: '相关协议',
    nodata: '暂无',
    promisePay: '承诺付款企业',
    label8: '企业名称',
    label9: '统一社会信用代码',
    label10: '企业账户',
    label11: '开户银行',
    debts: '第一手债权企业',
    promiseSection: '承兑方承诺',
    notice1: '到期无条件付款',
    notice2: '原始应付账款信息',
    label12: 'AP贸易金额',
    label13: '到期付款金额',
    label14: '核心企业',
    label15: '供应商',
    label16: '预计付款日',
    label17: '基础贸易信息',
    notice3: '待L1确认中，当前为预览版协议',
    notice4: 'AP发行失败，此为预览版协议',
  },
  taptransfer: {
    notice1: 'TAP转让单',
    label1: 'TAP编号',
    label2: 'TAP金额',
    label3: 'TAP状态',
    label4: '贸易信息',
    label5: '转让单号',
    label6: '转让日期',
    label7: '确认日期',
    label8: '备注',
    rejReason: '拒绝理由',
    notice2: '转出方',
    label9: '企业名称',
    label10: '统一社会信用代码',
    notice3: '承诺付款企业',
    label11: '承兑方承诺',
    notice4: '到期无条件付款',
    norice5: '接收方',
    notice6: '接收方账户信息',
    label12: '账户名称',
    label13: '银行账号',
  },
},
