import React, { Component } from 'react'
import style from '../../assets/css/search.scss'


class Search extends Component {
  constructor(props) {
    super(props)
    const { match, location: {search} } = this.props
    let key = '请输入要搜索的词'
    if(search && search.includes('key')) {
      key = search.split('=')[1]
    }
    this.state = {
      key
    }
  }

  handleSearch=()=> {

  }

  render() {
   const { key } = this.state
    return(
      <div className={style.search}>
        <div className={style["search-input"]}><input type="text" placeholder="lllll" autoFocus placeholder={key}/> </div>
        <span className={style["search-cancel"]} onClick={()=> this.props.history.goBack()}>取消</span>
      </div>
    )
  }
}

export default Search