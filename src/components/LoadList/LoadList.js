/*
*   下拉无限滚动组件
* */
import React, { Component } from 'react'
import LazyImg from "../LazyImg/LazyImg";
import { throttle } from 'assets/js/utils'
import { getRequest } from '../../services/request'

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
    previewList: [],
    displayCount: 0,
    data: this.props.list,
    noData: false
  }

  componentDidMount() {
    this._rowsInWindow = Math.ceil(this.props.el.offsetHeight / this.props.height),
    this._above = this._rowsInWindow * 2,
    this._below = this._rowsInWindow,
    this._max = this._rowsInWindow * this.height;
    let node = document.querySelector('.app-body')
    node.addEventListener('scroll', throttle(this.handleScroll, 250))
  }

  handleScroll=()=> {
    console.log("滚动")
    const { lastScrollTop, distance, data: list } = this.state
    const { height, canScroll } = this.props
    let _scrollTop = this.props.el.scrollTop,
      _height = this.props.el.querySelectorAll('ul')[0].offsetHeight,
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
        canScroll && this.loadmore(this.from, this.to);
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
    // if (typeof this.props.dispatchData === 'function') {
    //   console.log("需要请求数据啦")
    // }
    this.resetPreviewList(_from, _to);
    // this.forceUpdate(()=> {
    //     let _scrollTop = this.props.el.scrollTop,
    //       _height = this.ul.offsetHeight,
    //       _contentHeight = this.props.el.offsetHeight;
    //     if (_to === list.length && _height - _scrollTop - _contentHeight < 0) {
    //       canScroll && this.loadmore(this.from, this.to);
    //     }
    // })
  }

  resetPreviewList =(from, to)=> {
    let previewList = [];
    for (; from < to; from++) {
      previewList.push(this.props.list[from])
    }
    this.setState({
      previewList
    })
  }

  loadmore(from, to) {
    const { canLoadmore, noData } = this.state
    if (!canLoadmore && !noData) return;
    this.setState({ canLoadmore: false })
    // 在这里请求数据
    getRequest({ url: '/list' })
      .then(data=> {
        if(data && data.data) {
          if(data.data.length< 20) {
            this.setState({
              noData: false
            })
          }

          this.setState({
            data: this.state.data.concat(data.data)
          }, ()=> {
            console.log(this.state.data)
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


    // setTimeout(() => {
    //   let list = this.state.data
    //   for(var i = 20; i < 41; i++) {
    //     list.push('item '+ i)
    //   }
    //   this.setState({
    //     data: list
    //   }, ()=> {
    //     let _from = from, _to = to + this._below;
    //     this.resetPreviewList(_from, _to);
    //     this.to = this.state.data.length
    //     // this.lineBottomHeight = (this.state.list.length - _to) * this.props.height;
    //     this.handleScroll();
    //     this.setState({
    //       canLoadmore: true,
    //       lineBottomHeight: (this.state.data.length - _to) * this.props.height
    //     })
    //     // this.canLoadmore = true;
    //   })
    // }, 1000)
  }

  render() {
    return(
      <div>
        <div className="vue-list" >
          <ul ref={node=>this.ul=node}>
            {
              this.state.data.map((item, i)=><li key={i}  style={{ height: '50px' }}>{item}</li>)
            }
          </ul>
          <div className="load-more-gif">loading...</div>
        </div>
      </div>)
  }
}

LoadList.defaultProps={
  canScroll: true,
  height: 44,
  list: [],
  el: document.querySelector('.app-body'),
};

export default LoadList
