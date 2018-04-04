/*
*   项目配置
* */

export const config_index = {
  nav: [
    {
      title: '首页',
      icon: require('../assets/img/navbar/icon1.png'),
      selectedIcon: require('../assets/img/navbar/icon1_hl.png'),
      show: true,
      path:'/home'
    },{
      title: '类别',
      icon: require('../assets/img/navbar/icon5.png'),
      selectedIcon: require('../assets/img/navbar/icon5_1.png'),
      show: true,
      path:'/category'
    },{
      title: '拼团',
      icon:  require('../assets/img/navbar/icon3.png'),
      selectedIcon: require('../assets/img/navbar/icon3_1.png'),
      show: true,
      path:'/pintuan'
    },{
      title: '购物车',
      icon: require('../assets/img/navbar/icon2.png'),
      selectedIcon: require('../assets/img/navbar/icon2_1.png'),
      show: true,
      path:'/shoppingcar'
    },{
      title: '个人中心',
      icon: require('../assets/img/navbar/icon6.png'),
      selectedIcon: require('../assets/img/navbar/icon6_1.png'),
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