import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../../store/actions/green';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import style from '../../assets/css/home.scss'
import Header from './components/Header'
import AdBanner from './components/Adbanner'
import Category from './components/Category'
class Home extends Component {
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
       <div className={style.home}>
          <div className={style.homeHead}>
            {/**** logo 搜索框 *****/}
            <Header/>
            {/**** 广告轮播区 *****/}
            <AdBanner/>
            {/**** 类目入口 *****/}
            <Category/>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
