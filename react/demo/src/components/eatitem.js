import React, { Component } from 'react';

class EatItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {}

  componentWillUnmount() { // 只在页面刷新时执行一次--1
    console.log('componentWillUnmount--组件将要挂载到页面'); // 被废弃的
  }

  componentDidMount() { // 只在页面刷新时执行一次--3
    console.log('componentDidMount---组件挂载完成');
  }

  shouldComponentUpdate(nextProps, nextState) { // 4
    console.log('shouldComponentUpdate--组件发生改变之前执行');
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate() { // 5
    console.log('组件更新之前执行');
  }

  componentDidUpdate() { // 7
    console.log('componentDidUpdate---组件更新完成');
  }

  componentWillReceiveProps() {
    console.log('失效的周期');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount--卸载');
  }

  render() { // 数据源发生变化就会执行--2 --6
    console.log('render-组件挂在中');
    return ( 
      <li onClick={this.handleClick}>{this.props.content}</li>
     );
  }

  handleClick() {
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index)
  }
}
 
export default EatItem;