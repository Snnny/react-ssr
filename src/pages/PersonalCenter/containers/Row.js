/*
*   普通一行
* */
import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import style from '../../../assets/css/personalCenter.scss'

class Row extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, detail } = this.props
    return(
      <a href="javascript:void(0)" className={style.row}>
        <div className={style["row-title"]}>{title}</div>
        <div className={style["row-tail"]}>
          <span className={style["row-tail-text"]}>{detail}</span>
          <Icon type="right" size="lg"/>
        </div>
      </a>
    )
  }
}

export default Row