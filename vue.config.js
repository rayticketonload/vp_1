module.exports = {
  devServer: {
    host: 'localhost',
    port: 8098,
    // proxy: {
    //   '/api': {
    //     target: 'http://rap2api.taobao.org',
    //     // 将主机标头的原点更改为目标URL
    //     changeOrigin: true,
    //     pathRequiresRewrite: {
    //       '^/api': '/app/mock/5653',
    //     },
    //   },
    // },
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
      .set('ASSETS', '@/assets')
      .set('COM', '@/components')
      .set('API', '@/api')
      .set('CONFIG', '@/config/index.js')
      .set('ROUTER', '@/router')
      .set('STORE', '@/store')
      .set('UTILS', '@/utils')
      .set('VIEWS', '@/views');
  },
};
