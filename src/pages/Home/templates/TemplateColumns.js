/*
*   上下布局的模板
* */

import React, { Component } from 'react'
import style from '../../../assets/css/templates.scss'

class TemplateColumns extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={style["template-columns"]}>
        <div className={style["template-columns-item"]}>
          <div className={style["template-columns-item-left"]}>
            <div className={style["template-columns-title"]}>
              装备天地
            </div>
            <div className={style["template-columns-subtitle"]}>
              装备你的兴趣
            </div>
            <div className={style["template-columns-left-img"]}>
              左边的图片
            </div>
          </div>
          <div className={style["template-columns-item-right"]}>
            这里是图片
          </div>
        </div>
        <div className={style["template-columns-item"]}>
          TemplateColumn1
        </div>
        <div className={style["template-columns-item"]}>
          TemplateColumn1
        </div>
        <div className={style["template-columns-item"]}>
          TemplateColumn1
        </div>
      </div>
    )
  }
}

export default TemplateColumns
