/*
*   上下布局的模板
*   上部分是商品图片
*   下部分是名称及价格
* */
import React, { Component } from 'react'
import style from '../../../assets/css/templates.scss'
import LazyImg from '../../../components/LazyImg/LazyImg'

const list =  [
  {
    url: 'http://img0.imgtn.bdimg.com/it/u=4171693271,1659447971&fm=27&gp=0.jpg',
  },
  {
    url: 'http://img4.imgtn.bdimg.com/it/u=1011872397,3543254171&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img0.imgtn.bdimg.com/it/u=2756475985,1114761545&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img2.imgtn.bdimg.com/it/u=3639471269,2864188549&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img1.imgtn.bdimg.com/it/u=3661296278,1239992553&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img3.imgtn.bdimg.com/it/u=1371546576,2694186345&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img1.imgtn.bdimg.com/it/u=1355165345,2195500250&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img0.imgtn.bdimg.com/it/u=1110702292,1072275686&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img5.imgtn.bdimg.com/it/u=870736880,1100822295&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img4.imgtn.bdimg.com/it/u=1011872397,3543254171&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img0.imgtn.bdimg.com/it/u=4171693271,1659447971&fm=27&gp=0.jpg',
  },
  {
    url: 'http://img4.imgtn.bdimg.com/it/u=1011872397,3543254171&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img0.imgtn.bdimg.com/it/u=2756475985,1114761545&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img2.imgtn.bdimg.com/it/u=3639471269,2864188549&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img1.imgtn.bdimg.com/it/u=3661296278,1239992553&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img3.imgtn.bdimg.com/it/u=1371546576,2694186345&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img1.imgtn.bdimg.com/it/u=1355165345,2195500250&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img0.imgtn.bdimg.com/it/u=1110702292,1072275686&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img5.imgtn.bdimg.com/it/u=870736880,1100822295&fm=27&gp=0.jpg'
  },
  {
    url: 'http://img4.imgtn.bdimg.com/it/u=1011872397,3543254171&fm=27&gp=0.jpg'
  },
]

class TemplateCommon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={style["template-common"]}>
        {
          list.map((_, i)=> <div key={i} className={style["template-common-item"]}>
            <div className={style["template-common-item-content"]}>
              <LazyImg url={_.url} el={document.querySelector('.app-body')}/>
            </div>
            <div className={style["template-common-item-desc"]}>
              这里是描述
            </div>
          </div>)
        }
      </div>
    )
  }
}

export default TemplateCommon
