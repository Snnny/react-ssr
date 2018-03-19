import React, { Component } from 'react'
import defaultImg from '../../assets/img/default.jpg'
import PropTypes from 'prop-types'

class LazyImg extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    url: this.props.default,
  }

  componentDidMount() {
    this.loadImage()
    this.props.el.addEventListener('scroll', this.handleLoad);
  }

  handleLoad =()=> {
    let ticking = false, _this = this;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        _this.loadImage()
        ticking = false;
      });
    }
    ticking = true;
  }

  loadImage =()=> {
    const { url } = this.props
    const { url: _url } = this.state
    if(_url === url) { // 移除事件
      this.props.el.removeEventListener('scroll', this.handleLoad)
      return;
    }
    if(url && this._isShow(this.img)) {
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
