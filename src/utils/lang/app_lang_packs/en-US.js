// 测试模块
const exampleSectionLang = {
  test: 'test',
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
    loginButton: 'login',
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
};

export default {
  exampleSectionLang,
  loginSection,
};
