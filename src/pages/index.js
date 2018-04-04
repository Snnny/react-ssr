import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link, NavLink } from 'react-router-dom';
import  { RouteWithSubRoutes } from '../app/router';
import style from '../assets/css/app.scss'
import FooterNav from './FooterNav';

class Home extends Component{
  constructor(props) {
    super(props)
  }
  state={
    hasError:false,

  }
  componentDidMount(){
    // this.props.getHomeInfo()
    // 跳转到默认的首页
    const { location: {pathname}, history } = this.props
    if(pathname === '/') {
      history.replace({ pathname: '/home' })
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    // 在这里可以做异常的上报
    console.log('发送错误':error,info)
  }

  render(){

    const { routes, children, location: {pathname} } = this.props
    let title = ''
    switch(pathname) {
      case '/red':
        title = '红色专区'
        break;
      case '/green':
        title = '绿色专区'
        break;
      case '/blue':
        title = '蓝色专区'
        break;
      default:
        title = '首页'
    }
    return (
      <div className={style.app} >
        {/*<div className={style.appTitle}>{title}</div>*/}
        <div className={`${style.appBody} app-body`}>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
        <div className={style.appFooter}>
          <FooterNav />
        </div>
      </div>
    )
  }
}

export default connect()(Home)
