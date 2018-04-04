/*
*   头部logo + 搜索
* */
import React, { Component } from 'react'
import style from '../../../assets/css/home.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  quickSearch =(key)=> {
    console.log(key)
  }
  render() {
    const quickSearch = ['韩版男鞋','儿童绘本']
    return(
      <div className={style.homeSearch}>
        <div className={style.logo}></div>
        <div className={style.search}>
          <p className={style.quickSearch}>
            {
              quickSearch.map((_, i)=>{
                if(i) {
                  return <span onClick={()=>this.quickSearch(_)}>{_}</span>
                }
                return <span onClick={()=>this.quickSearch(_)}>{_} <span className={style.searchSplit}>|</span></span>
              })
            }
          </p>
          <input type="text" placeholder={quickSearch.length ? '' :'搜索您喜欢的好物'}/>
        </div>
      </div>
    )
  }
}

export default Header