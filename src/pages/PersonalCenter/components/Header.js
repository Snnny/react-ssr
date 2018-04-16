/*
*   个人中心头部
*
* */
import React, { Component } from 'react'
import style from '../../../assets/css/personalCenter.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={style.header}>
        <div className={style["header-avatar-box"]}>
        </div>
        <span>杨克</span>
      </div>
    )
  }
}

export default Header
