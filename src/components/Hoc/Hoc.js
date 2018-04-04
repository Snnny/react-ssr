/*
*   高阶组件
*
* */
import React, { Component } from 'react'

export default WrappedComponent => class HOC extends Component {
  render() {
    console.log("HOC", this.props)
    const { push } = this.props.history
    // 权限拦截
    // if(!location.Login) {
    //   push({ pathname: '/green' })
    // }
    return (
      <div>
        <h1>默认标题</h1>
        <WrappedComponent {...this.props} />
      </div>
    );
  }
};
