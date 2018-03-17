import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link, NavLink } from 'react-router-dom';
import Page from '../containers/Page';
import  { RouteWithSubRoutes } from '../app/router'
require('../assets/css/app.scss')

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
      <div className="app" >
        <div className="app-title">{title}</div>
        <div className="app-body">
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
        <div className="app-footer">
          <div className="app-footer-btn">
            <NavLink to='/green' activeStyle={{color:'red'}}>Green</NavLink>
          </div>
           <div className="app-footer-btn">
            <NavLink to='/red' activeStyle={{color:'red'}}>red</NavLink>
          </div>
          <div className="app-footer-btn">
           <NavLink to='/blue' activeStyle={{color:'red'}}>blue</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Home)
