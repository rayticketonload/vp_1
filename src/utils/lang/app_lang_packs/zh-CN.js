// 测试模块
const exampleSectionLang = {
  test: '测试',
};

// 登录模块
const loginSection = {
  // 占位符
  placeholder: {
    account: '注册手机号',
    verifyCode: '验证码',
  },
  // html字符串内容
  innerHtml: {
    loginButton: '登录',
  },
  // 表单验证信息
  verifyMsg: {
    account: {
      require: '请输入注册手机号码',
    },
    verifyCode: {
      require: '请输入验证码',
      pattern: '请输入四位数验证码',
    },
  },
  // 表单提交结果
  result: {
    success: '提交成功',
    fail: '提交失败',
  },
};

export default {
  exampleSectionLang,
  loginSection,
};
