/*
*   下拉无限滚动组件
* */

import React, { Component } from 'react'
import LazyImg from "../LazyImg/LazyImg";
import { throttle } from 'assets/js/utils'
import { getRequest } from '../../services/request'
import style from './LoadList.scss'
class LoadList extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    lastScrollTop: null,
    distance: 44,
    lineTopHeight: 0,
    lineBottomHeight: 0,
    canLoadmore: true,
    previewList: this.props.list,
    displayCount: 0,
    data: this.props.list,
    page: 1,
    _from: '',
    _to: ''
  }

  componentDidMount() {
    this._rowsInWindow = Math.ceil(this.props.el.offsetHeight / this.props.height),
    this._above = this._rowsInWindow * 2,
    this._below = this._rowsInWindow,
    this._max = this._rowsInWindow * this.height;
    let node = document.querySelector('.app-body')
    node.addEventListener('scroll', throttle(this.handleScroll, 250))
  }

  componentWillReceiveProps(nextProps) {
    // const {list, noData} = nextProps
    // console.log(">>>>>>>>>>",list.length, noData)
    // if(!list.length || noData) {
    //   return
    // }
    // this.setState({
    //   data: this.state.data.concat(list)
    // },()=> {
    //   const { _from: from, _to: to } = this.state
    //   let _from = from, _to = to + this._below;
    //   this.resetPreviewList(_from, _to);
    //   this.to = this.state.data.length
    //   // this.lineBottomHeight = (this.state.list.length - _to) * this.props.height;
    //   // this.handleScroll();
    //   this.setState({
    //     // canLoadmore: true,
    //     lineBottomHeight: (this.state.data.length - _to) * this.props.height
    //   })
    // })
  }

  handleScroll=()=> {
    const { lastScrollTop, distance, data: list, canLoadmore } = this.state
    const { height, canScroll } = this.props
    // console.log(lastScrollTop,list, this.ul, canScroll)
    let _scrollTop = this.props.el.scrollTop,
      _height = this.ul.offsetHeight,
      _contentHeight = this.props.el.offsetHeight;
    if (_scrollTop / height - Math.floor(_scrollTop / height) > 0.5) {
      this.setState({
        displayCount: Math.ceil(_scrollTop / height)
      })
    } else {
      this.setState({
        displayCount: Math.floor(_scrollTop / height)
      })
    }
    if (lastScrollTop === null || Math.abs(_scrollTop - lastScrollTop) > this._max) {
      this.setState({ lastScrollTop: _scrollTop })
    } else {
      if (this.to === list.length && _height - _scrollTop - _contentHeight < distance) {
        canLoadmore && this.loadmore(this.from, this.to);
      }
      return;
    }
    let _from = parseInt(_scrollTop / height) - this._above;
    if (_from < 0) {
      _from = 0;
    }
    let _to = _from + this._above + this._below + this._rowsInWindow;
    if (_to > list.length) {
      _to = list.length;
    }
    this.from = _from;
    this.to = _to;

    this.setState({
      lineTopHeight: _from * height,
      lineBottomHeight: (list.length - _to) * height
    })
    this.resetPreviewList(_from, _to);
  }

  resetPreviewList =(from, to)=> {
    console.log(from, to)
    let previewList = [];
    for (; from < to; from++) {
      previewList.push(this.state.data[from])
    }
    console.log(previewList)
    this.setState({
      previewList
    })
  }

  loadmore(from, to) {
    const { canLoadmore } = this.state
    const { canScroll } = this.props
    if (!canScroll ) return;
    this.setState({ canLoadmore: false, page: ++this.state.page })
    // 在这里请求数据
    console.log("请求数据。。。。。")
    // this.props.loadData && this.props.loadData()
    this.setState({
      _from: from,
      _to: to
    })
    getRequest({ url: `/list?page=${this.state.page}` })
      .then(data=> {
        if(data && data.data) {
          if(data.data.length< 20) {
            this.setState({
              canLoadmore: false,
              noData: true
            })
            return
          }
          this.setState({
            data: this.state.data.concat(data.data)
          }, ()=> {
            let _from = from, _to = to + this._below;
            this.resetPreviewList(_from, _to);
            this.to = this.state.data.length
            // this.lineBottomHeight = (this.state.list.length - _to) * this.props.height;
            this.handleScroll();
            this.setState({
              canLoadmore: true,
              lineBottomHeight: (this.state.data.length - _to) * this.props.height
            })
          })
        }
      })
  }

  render() {
    return(
      <div>
        <div className={style.vueList}>
          <ul ref={node=>this.ul=node}>
            {
              this.state.data.map((item, i)=><li className={style.listItem} key={i}>
                <img src={item.url}/>
              </li>)
            }
          </ul>
          {
            this.state.noData
              ? <p>我是有底线的</p>
              : null
          }
        </div>
      </div>)
  }
}

LoadList.defaultProps={
  canScroll: true,
  height: 40,
  list: [],
  el: document.querySelector('.app-body'),
};

export default LoadList
