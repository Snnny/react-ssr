import React, { Component } from 'react'
import defaultImg from '../../assets/img/default.jpg'
import PropTypes from 'prop-types'
import { throttle } from 'assets/js/utils'

// let ON_SCREEN_HEIGHT = 0;
let ON_SCREEN_HEIGHT = 50;
// let ON_SCREEN_HEIGHT = Infinity;
// let ON_SCREEN_WIDTH = 0;
let ON_SCREEN_WIDTH = 50;
// let ON_SCREEN_WIDTH = Infinity;

let isOnScreen = function (element) {

  let rect = element.getBoundingClientRect();
  let windowHeight = window.innerHeight || document.documentElement.clientHeight;
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;

  let elementHeight = element.offsetHeight;
  let elementWidth = element.offsetWidth;

  let onScreenHeight = ON_SCREEN_HEIGHT > elementHeight ? elementHeight : ON_SCREEN_HEIGHT;
  let onScreenWidth = ON_SCREEN_WIDTH > elementWidth ? elementWidth : ON_SCREEN_WIDTH;

  // 元素在屏幕上方
  let elementBottomToWindowTop = rect.top + elementHeight;
  let bottomBoundingOnScreen = elementBottomToWindowTop >= onScreenHeight;

  // 元素在屏幕下方
  let elementTopToWindowBottom = windowHeight - (rect.bottom - elementHeight);
  let topBoundingOnScreen = elementTopToWindowBottom >= onScreenHeight;

  // 元素在屏幕左侧
  let elementRightToWindowLeft = rect.left + elementWidth;
  let rightBoundingOnScreen = elementRightToWindowLeft >= onScreenWidth;

  // 元素在屏幕右侧
  let elementLeftToWindowRight = windowWidth - (rect.right - elementWidth);
  let leftBoundingOnScreen = elementLeftToWindowRight >= onScreenWidth;

  return bottomBoundingOnScreen && topBoundingOnScreen && rightBoundingOnScreen && leftBoundingOnScreen;
};
class LazyImg extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    url: this.props.default,
  }

  componentDidMount() {
    this.loadImage()
    this.props.el.addEventListener('scroll', throttle(this.loadImage, 250));
  }

  loadImage =()=> {
    const { url } = this.props
    const { url: _url } = this.state
    if(_url === url) { // 移除事件
      this.props.el.removeEventListener('scroll', this.handleLoad)
      return;
    }

    setTimeout(()=> {
      console.log(this._isShow(this.img))
      if(url && this._isShow(this.img)) {
        this.setState({ url })
      }
    },20)
  }

  _isShow(el) {
    let coords = el.getBoundingClientRect();
    return ( (coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(this.props.offset));
  }

  render() {
    return <img
              ref={node => this.img=node}
              src={this.state.url}/>
  }
}

LazyImg.defaultProps={
  offset: 0,
  el: window,
  default: defaultImg,
};

LazyImg.propTypes = {
  offset: PropTypes.number,
  el: PropTypes.object,
  url: PropTypes.string.isRequired,
  default: PropTypes.string
}

export default LazyImg
