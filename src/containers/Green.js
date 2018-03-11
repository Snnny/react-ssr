import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/green';
require('../assets/css/green.scss')

class Green extends Component {
  constructor(props) {
    super(props)
  }

  state = {

  }

  componentDidMount(){
    this.props.getHomeInfo()
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
