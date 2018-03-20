import React,{Component} from 'react';
import { getRequest } from '../services/request'

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

  render() {
    return(
      <div>
        <p>红色部分的子节点</p>
      </div>
    )
  }
}

export default RedChild
