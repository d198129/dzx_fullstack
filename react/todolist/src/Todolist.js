import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: ['学习react','学习vue3']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="input">输入内容</label>
          <input id="input" className="input" value={ this.state.inputValue } onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={ this.handleBtnClick.bind(this) }>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <TodoItem content={item} key={index} index={index} deleteItem={this.delete.bind(this)} ></TodoItem>
              /* <li key={index} dangerouslySetInnerHTML={ {__html: item} } onClick={this.delete.bind(this,index)}></li> */ 
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    // console.log(e.target.value);
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  delete(index) {
    // immutable
    // state 不允许做任何的改变 
    let list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list:list
    })
  }
}

export default Todolist