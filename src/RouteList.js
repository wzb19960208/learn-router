// 一个数组，定义着匹配的路由和路径
export default  [
    {
      path: '/',
      name: 'index',
      component: '<h1>首页</h1>'
    },
    {
      path: '/uestc',
      name: 'uestc',
      component: '<h1>电子科技大学是一个好学校</h1>'
    },
    {
      path: '/nju',
      name: 'nju',
      component: '<h1>南京大学是一个好学校</h1>'
    },
    {
      path: '/404',
      name: 'notFound',
      component: '<h1>404 NOT FOUND</h1>'
    }
  ];
  