import React,{Component} from 'react';
import { getRequest, postRequest } from '../services/request'

class RedChild extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    getRequest({ url: '/json' })
      .then(data=> {
        if(data && data.data) { // 请求成功
          console.log(data.data.title)
        }
      })
  }

  postTest() {
    postRequest('/add', { name: 'yangke' })
      .then(data=> {
        console.log("..........", data)
      })
  }

  render() {
    return(
      <div>
        <p>红色部分的子节点</p>
        <button onClick={this.postTest}>点击我发送post请求</button>
      </div>
    )
  }
}

export default RedChild
