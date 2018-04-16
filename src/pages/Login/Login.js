import React,{Component} from 'react'
import { postRequest } from '../../services/request'
import style from '../../assets/css/login.scss'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  submit=e=> {
    e.preventDefault()
    postRequest('/Login',Object.assign({source: 'form'},{ userName: this.username.value, password: this.password.value }))
      .then(data=> {
        const { success, message } = data.data
        if(success) {
          console.log("success...........")
          this.props.history.goBack()
        } else {
          alert(message)
        }
      })
  }

  render() {
    return <div className={style.login}>
        <h1 className={style["login-title"]}>登陆页面</h1>
        <form onSubmit={this.submit}>
          <div className={style["login-row"]}>
            <span>用户名：</span> <input ref={node=>this.username=node} type="text"/>
          </div>
          <div className={style["login-row"]}>
            <span>密码：</span> <input ref={node=>this.password=node} type="password"/>
          </div>
          <div  className={style["login-row"]}>
            <button type="submit">提交</button>
          </div>
        </form>
    </div>
  }
}

export default Login