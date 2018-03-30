import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/green';
require('../assets/css/green.scss')
import NativeShare from 'nativeshare'

var nativeShare = new NativeShare()
var shareData = {
  title: 'NativeShare',
  desc: 'NativeShare是一个整合了各大移动端浏览器调用原生分享的插件',
  link: 'https://github.com/fa-ge/NativeShare',
  icon: 'https://pic3.zhimg.com/v2-080267af84aa0e97c66d5f12e311c3d6_xl.jpg',
  success: function() {
    alert('success')
  },
  fail: function() {
    alert('fail')
  }
}
nativeShare.setShareData(shareData)

class Green extends Component {
  constructor(props) {
    super(props)
  }

  state = {

  }

  componentDidMount(){
    this.props.getHomeInfo()
  }

  call=(command)=> {
    try {
      nativeShare.call(command)
    } catch (err) {
      alert(err.message)
    }
  }

  render() {
    let {add,count,homeInfo:{name,age}}=this.props;
    return (
       <div className="green">
          <p className="green-title">绿色部分</p> 
          <p>
            name: {name || 'admin'}
            age: {age || '18'}
          </p>  
          <hr/>
          <p> 当前计数为：{count} <button onClick={()=> add(++count)}>点击加1</button> </p>

         <button onClick={()=>this.call()}>通用分享</button>
         <button onClick={()=>this.call('wechatFriend')}>微信好友</button>
         <button onClick={()=>this.call('wechatTimeline')}>朋友圈</button>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  count: state.counter.count,
  homeInfo: state.homeInfo,
})

const mapDispatchToProps=(dispatch)=>bindActionCreators({
  add: actions.add,
  getHomeInfo: actions.getHomeInfo,
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Green)
