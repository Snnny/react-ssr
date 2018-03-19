/*
*   高阶组件
*
* */
import React, { Component } from 'react'

export default function GenerateId(WrappedComponent) {
  class HOC extends Component {
    render() {
      const newProps = {
        id: Math.random().toString(36).substring(2).toUpperCase()
      };

      return React.createElement(WrappedComponent, {
        ...this.props,
        ...newProps
      });
    }
  };
  // 拷贝静态方法 插件下载失败
  // hoistNonReactStatic(HOC, WrappedComponent);
  return HOC
}