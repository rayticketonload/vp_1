const path = require('path');

const resolve = dir => path.join(__dirname, dir);

const getIP = () => {
  const os = require('os');
  const ifaces = os.networkInterfaces();
  let ip = '';
  for (const dev in ifaces) {
    ifaces[dev].forEach((details) => {
      if (ip === '' && details.family === 'IPv4' && !details.internal) {
        ip = details.address;
      }
    });
  }
  return ip;
};

module.exports = {
  // 默认情况下，我们假设你的应用将被部署在域的根目录下,
  // 如果应用程序部署在子路径中，则需要在这指定子路径
  // baseUrl: '/',
  lintOnSave: true,
  devServer: {
    host: getIP(),
    port: 8098,
    proxy: {
      '/': {
        target: 'http://rap2api.taobao.org/',
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        ws: true,
      },
    },
  },
  css: {
    // 配置css模块
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: 'true', // 设置为true
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('ASSETS', '@/assets')
      .set('COM', '@/components')
      .set('API', '@/api')
      .set('CONFIG', '@/config/index.js')
      .set('ROUTER', '@/router')
      .set('STORE', '@/store')
      .set('UTILS', '@/utils')
      .set('VIEWS', '@/views');
  },
  productionSourceMap: true,
};
