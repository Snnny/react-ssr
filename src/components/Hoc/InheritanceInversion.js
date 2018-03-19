/*
*   高阶组件：反向继承
*
* */
export default function (WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    componentWillMount() {
      // 可以方便地得到state，做一些更深入的修改。
      console.log('高阶组件componentWillMount')
      this.setState({
        innerText: '我被Inheritance修改了值'
      });
    }
    render() {
      return super.render();
    }
  };
}