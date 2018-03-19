/*
*   高阶组件
*
* */
import React, { Component } from 'react'


export default ({ title= '默认标题' }) => WrappedComponent => class HOC extends Component {
  render() {
    console.log("HOC", this.props)
    const { push } = this.props.history
    // 权限拦截
    // if(!location.login) {
    //   push({ pathname: '/green' })
    // }
    return (
      <div>
        <h1>{title}</h1>
        <WrappedComponent {...this.props} />
      </div>
    );
  }
};
