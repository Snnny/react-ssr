import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import style from '../assets/css/blue.scss'
import Hoc from '../components/Hoc/Hoc'
import HocWithArg from '../components/Hoc/HocWithArg'
import HocPassProps from '../components/Hoc/HocPassProps'
import InheritanceInversion from '../components/Hoc/InheritanceInversion'
import LoadList from '../components/LoadList/LoadList'

class Blue extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // 这里没有触发
    console.log("元组件")
  }

  static getName =()=> 'blue'

  render() {
    let list = []
    for(let i=0; i<20; i++ ) {
      list.push('item'+i)
    }
    return(
      <div className={style.blue}>
        <p className={style.blueTitle}>蓝色部分</p>
        <Link to="/login"> 返回登陆 </Link>
        {/*<div className={style.borderOne}>我是一像素边框</div>*/}

        {/*<div className={style.borderTest}>border-test</div>*/}

        <LoadList list={list} dispatchData={()=>{}}/>
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