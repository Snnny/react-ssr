/*
*   某些类别的快速入口
* */

import React, { Component } from 'react'
import style from '../../../assets/css/home.scss'
import { Icon } from 'antd-mobile'

class Category extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { categoryList } = this.props
    return(
      <div className={style.category}>
        {
          categoryList.map(_=> <div key={_.path} className={style.categoryItem}>
            <div>
              <Icon type={"check-circle"} size="lg"/>
            </div>
            <div className={style.newsItem}>
              { _.title }
            </div>
          </div>)
        }
      </div>
    )
  }
}

Category.defaultProps = {
  categoryList: [
    {
      title: '儿童馆',
      path: '/children'
    }, {
      title: '家有萌宠',
      path: '/animal'
    }, {
      title: '女神馆',
      path: '/goddess'
    }, {
      title: '必买好物',
      path: '/goods'
    }
  ]
}

export default Category
