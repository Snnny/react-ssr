import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link, NavLink } from 'react-router-dom';
import Page from '../containers/Page';
import  { RouteWithSubRoutes } from '../app/router';
import style from '../assets/css/app.scss'
console.log(style)
class Home extends Component{
  state={
    hasError:false,
  }
  componentDidMount(){
    // this.props.getHomeInfo()
    // 跳转到默认的首页
    const { location: {pathname}, history } = this.props
    if(pathname === '/') {
      history.push({ pathname: '/green' })
    }
    window.addEventListener('scroll', this.loadImage, false);
  }


  loadImage () {
    console.log('..........')
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
        <div className={style.appTitle}>{title}</div>
        <div className={`${style.appBody} app-body`}>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
        <div className={style.appFooter}>
          <div className={style.appFooterBtn}>
            <NavLink to='/green' activeStyle={{color:'red'}}>Green</NavLink>
          </div>
           <div className={style.appFooterBtn}>
            <NavLink to='/red' activeStyle={{color:'red'}}>red</NavLink>
          </div>
          <div className={style.appFooterBtn}>
           <NavLink to='/blue' activeStyle={{color:'red'}}>blue</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Home)
