import React, { Component } from 'react'
import defaultImg from '../../assets/img/default.jpg'
import PropTypes from 'prop-types'
import { throttle } from 'assets/js/utils'

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
    console.log("loadImage...........",this._isShow(this.img))
    if(url && this._isShow(this.img)) {
      console.log("设置url", url)
      this.setState({ url })
    }
  }

  _isShow(el) {
    let coords = el.getBoundingClientRect();
    return ( (coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(this.props.offset));
  }

  render() {
      const style = {
          display: 'inline-block',
          width: '150px'
      }
    return <img
              ref={node => this.img=node}
              style={{...style}}
              src={this.state.url}/>
  }
}

LazyImg.defaultProps={
  offset: 0,
  el: document.body,
  default: defaultImg,
};

LazyImg.propTypes = {
  offset: PropTypes.number,
  el: PropTypes.object,
  url: PropTypes.string.isRequired,
  default: PropTypes.string
}

export default LazyImg
