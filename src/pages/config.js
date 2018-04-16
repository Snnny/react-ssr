/*
*   项目配置
* */

export const config_index = {
  nav: [
    {
      title: '首页',
      icon: 'home',
      selectedIcon: 'home-active',
      show: true,
      path:'/home'
    },{
      title: '类别',
      icon: 'category',
      selectedIcon: 'category-active',
      show: true,
      path:'/category'
    },{
      title: '拼团',
      icon:  "pintuan",
      selectedIcon: "pintuan-active",
      show: true,
      path:'/pintuan'
    },{
      title: '购物车',
      icon: "shopcar",
      selectedIcon: "shopcar-active",
      show: true,
      path:'/shoppingcar'
    },{
      title: '个人中心',
      icon: "user",
      selectedIcon: "user-active",
      show: true,
      path:'/person'
    },
  ],
  commonNav: { // 导航的一般设置
    background: 'white',
    color: '#108ee9',
    activeColor: '#ff0000'
  }
}