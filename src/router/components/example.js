// 示例
const example = r => require.ensure([], () => r(require('VIEWS/example/example')), 'example');

export default [
  {
    path: '/example',
    name: 'example',
    component: example,
    meta: {
      requireAuth: true,
      title: '示例',
    },
  },
];
