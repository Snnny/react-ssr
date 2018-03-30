import React,{Component} from 'react'
import { postRequest } from '../services/request'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  submit=e=> {
    e.preventDefault()
    postRequest('/login',{ userName: this.username, password: this.password })
      .then(data=> {

        console.log("data", data)
      })
  }

  render() {
    return <div style={{position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, zIndex: 100, background: '#fff'}}>
      <h1>登陆页面</h1>
      <form onSubmit={this.submit}>
        <div>
          <span>用户名：</span> <input ref={node=>this.username=node} type="text"/>
        </div>
        <div>
          <span>密码：</span> <input ref={node=>this.password=node} type="password"/>
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  }
}

export default Login