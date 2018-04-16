import React, { Component } from 'react'
import cookie  from 'react-cookie'
import Header from './components/Header'
import Order from './components/Order'
import { getRequest } from '../../services/request'
import style from '../../assets/css/personalCenter.scss'

class PersonalCenter extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    getRequest({ url: '/user', params: { id: '1' } })
      .then(data=> {
        console.log('ddddddddd',data)
      })
  }

  logout=()=> {
    this.props.history.push('/login')
  }

  render() {
    console.log("USER_SIDimport>>>>>>>>>>", cookie,cookie.load('USER_SID'))
    const {  history } = this.props
    // if(!cookies) {
    //   history.push('/login')
    // }
    return(
      <div>
        {/*  个人中心头部 */}
        <Header/>
        {/*  订单  */}
        <Order/>
        {/* 退出登录 */}
        <div onClick={this.logout}>退出登录</div>
      </div>
    )
  }
}

export default PersonalCenter