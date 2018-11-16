// 测试模块
const exampleSectionLang = {
  test: 'test',
  toHome: 'home',
};

// 路由模块
const routerSection = {
  // message
  message: {
    tokenError: 'Authentication fail, please login again',
  },
};

// 登录模块
const loginSection = {
  // 占位符
  placeholder: {
    account: 'register phone',
    verifyCode: 'verification code',
  },
  // html字符串内容
  innerHtml: {
    loginBtn: 'login',
  },
  // 表单验证信息
  verifyMsg: {
    account: {
      require: 'Please fill in the register phone',
    },
    verifyCode: {
      require: 'Please fill in the verifyCode',
      pattern: 'The password length should be 4 bits',
    },
  },
  // 表单提交结果
  result: {
    success: 'Success',
    fail: 'Fail',
  },
  // message
  message: {
    loginSuccess: 'Login success',
  },
};

const homeSection = {
  // html字符串内容
  innerHtml: {
    logoutBtn: 'Logout',
    toExamplePage: 'Example',
  },
  // message
  message: {
    logoutSuccess: 'Logout success',
  },
};

export default {
  exampleSectionLang,
  routerSection,
  loginSection,
  homeSection,
};
