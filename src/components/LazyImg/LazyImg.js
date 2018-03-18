import React, { Component } from 'react'
import defaultImg from '../../assets/img/default.jpg'

class LazyImg extends Component {
  constructor(props) {
    super(props)
    this.loadImage = this.loadImage.bind(this)
  }

  state = {
    url: defaultImg,
  }

  componentDidMount() {
    let scrollNode = document.querySelector('.app-body')
    this.loadImage()
    let ticking = false, _this = this;
    scrollNode.addEventListener('scroll', function(e) {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          _this.loadImage()
          ticking = false;
        });
      }
      ticking = true;
    });
  }

  loadImage =()=> {
    const { url } = this.props.data
    const { url: _url } = this.state
    if(_url!== url &&  url && this._isShow(this.img)) {
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
      const { data } = this.props
    return <div>
        <img ref={node => this.img=node}  style={{...style}}  src={this.state.url}/>
    </div>
  }
}

LazyImg.defaultProps={
    offset: 0
};

export default LazyImg
