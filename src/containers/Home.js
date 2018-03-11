import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link, NavLink } from 'react-router-dom';
import Page from '../containers/Page';
import  { RouteWithSubRoutes } from '../app/router'

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
    // let {add,count,homeInfo:{name,age}}=this.props;
    const AppStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }
    const TitleStyle = {
      height:　'40px',
      borderBottom: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    const Body = {
      flex: 1
    }
    const Footer = {
      height:　'100px',
      borderTop: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }

    const FooterBtn = {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }
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
      <div style ={{...AppStyle}}>
        <div style={{...TitleStyle}}>{title}</div>
        <div style={{...Body}}>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
        <div style={{...Footer}}>
          <div style={{...FooterBtn}}>
            <NavLink to='/green' activeStyle={{color:'red'}}>Green</NavLink>
          </div>
           <div style={{...FooterBtn }}>
            <NavLink to='/red' activeStyle={{color:'red'}}>red</NavLink>
          </div>
          <div style={{...FooterBtn}}>
           <NavLink to='/blue' activeStyle={{color:'red'}}>blue</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Home)
