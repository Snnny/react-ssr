/*
*   个人中心头部
*
* */
import React, { Component } from 'react'
import style from '../../../assets/css/personalCenter.scss'
import Row from '../containers/Row'

const SERVICES = [
  { title: '待付款', icon: 1 },
  { title: '待成团', icon: 2 },
  { title: '待发货', icon: 3 },
  { title: '已发货', icon: 4 },
  { title: '交易成功', icon: 5 },
]

class Order extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={style.order}>
        <Row title="我的订单" detail="全部订单"/>
        <div className={style["order-list"]}>
          {
            SERVICES.map(_=>
            <div key={_.title} className={style["order-list-item"]}>
              <span>{_.icon}</span>
              <span>{_.title}</span>
            </div>)
          }
        </div>
      </div>
    )
  }
}

export default Order