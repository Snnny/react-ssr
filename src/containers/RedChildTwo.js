import React,{Component} from 'react';
import LazyImg from '../components/LazyImg/LazyImg.js'

class RedChildB extends Component{

  constructor(props) {
    super(props)
    this.loadImage = this.loadImage.bind(this)
  }

  componentDidMount() {
    console.log("子元素", this.red)
    this.red.addEventListener('scroll', this.loadImage);
  }

  loadImage () {
    console.log('..........')
  }


  render() {
    const imgList = [
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
        }
    ]
    const scrollNode = document.querySelector('.app-body')
    console.log(typeof scrollNode)
    return(
      <div ref={node=> this.red=node}>
        <p>红色部分的子节点B</p>
        <ul>
          {
            imgList.map((_, i)=> <li style={{height: '120px'}} key={i}>
              <LazyImg url={_.url} el={scrollNode}/>
            </li>)
          }
        </ul>
      </div>)
  }
};

export default RedChildB