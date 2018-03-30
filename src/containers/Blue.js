import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import style from 'assets/css/blue.scss'
import Hoc from '../components/Hoc/Hoc'
import HocWithArg from '../components/Hoc/HocWithArg'
import HocPassProps from '../components/Hoc/HocPassProps'
import InheritanceInversion from '../components/Hoc/InheritanceInversion'
import LoadList from '../components/LoadList/LoadList'
import { getRequest } from '../services/request'

class Blue extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    list: [],
    page: 1,
    noData: false,
    canScroll: true
  }

  componentDidMount() {
    // 这里没有触发
    getRequest({ url: '/list?page=1' })
      .then(data=> {
        if(data && data.data) {
          this.setState({
            list: data.data
          })
        }
      })

  }

  static getName =()=> 'blue'

  loadData=()=> {
    console.log("父组件加载数据", this.state.noData, this.state.page)
    if(this.state.noData)
      return
    getRequest({ url: `/list?page=${this.state.page+1}` })
      .then(data=> {
        if(data && data.data) {
          console.log("请求的数据", data.data)
          if(data.data.length < 20) {
            console.log("不用再请求了。。。")
            this.setState({
              noData: true,
              list: data.data,
              canScroll: false
            })
          } else {
            this.setState({
              list: data.data,
              page: ++this.state.page
            })
          }
        }
      })
  }

  render() {
   const { list, noData, canScroll } = this.state
    return(
      <div className={style.blue}>
        <p className={style.blueTitle}>蓝色部分</p>
        <Link to="/login"> 返回登陆 </Link>
        {/*<div className={style.borderOne}>我是一像素边框</div>*/}

        {/*<div className={style.borderTest}>border-test</div>*/}
        {
          list.length
            ?  <LoadList
                canScroll={canScroll}
                noData={noData}
                list={list}
                loadData={this.loadData}/>
            : null
        }
      </div>
    );
  }
}


// export default Hoc(Blue)
// export default HocWithArg({ title: 'HocPassProps' })(Blue)

/*
*   测试调用后组件还有没有原来的静态方法
* */

// console.log(typeof Blue.getName) // function
// const HocComponent = HocPassProps(Blue)
// console.log(typeof HocPassProps.getName)// undefined

// export default InheritanceInversion(Blue)
export default Blue