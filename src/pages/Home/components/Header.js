/*
*   头部logo + 搜索
* */
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import style from '../../../assets/css/home.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  quickSearch =(e)=> {
    e.stopPropagation()
    const { value } = e.target.dataset
    let arg = { pathname: '/search'}
    if(value) {
      Object.assign(arg, {  search: `?key=${value}`, })
    }
    this.props.history.push(arg)
  }

  render() {
    const quickSearch = ['韩版男鞋','儿童绘本']
    return(
      <div className={style.homeSearch}>
        <div className={style.logo}></div>
        <div className={style.search}>
          <p className={style.quickSearch} onClick={this.quickSearch}>
            {
              quickSearch.map((_, i)=>{
                if(i) {
                  return <span key={`quickSearch${i}`} data-value={_} onClick={this.quickSearch}>{_}</span>
                }
                return <span key={`quickSearch${i}`} data-value={_} onClick={this.quickSearch}>{_} <span className={style.searchSplit}>|</span></span>
              })
            }
          </p>
          <input type="text" placeholder={quickSearch.length ? '' :'搜索您喜欢的好物'}/>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)