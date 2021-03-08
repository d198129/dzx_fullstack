import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { getInputChangeAction, getADDItemAction, getDeleteItem } from './store/actionCreator'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    store.subscribe(this.handleStoreChange) // 观察，store变化就会触发括号里的方法
  }

  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input 
            value={this.state.inputValue} 
            placeholder="todo info" 
            style={{width: '300px',marginRight: '10px'}}
            onChange={this.handleInputChange}
          ></Input>
          <Button type="primary" onClick={ this.handleButtonClick }>提交</Button>
        </div>

        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={ this.handleItemDelete.bind(this,index)}>{item}</List.Item>
          )}
        />
      </div>
    )
  }

  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action)
  }

  handleStoreChange() { // 感知到store的变化
    console.log('store change')
    this.setState(store.getState())
  }
  handleButtonClick() {
    // const action = {
    //   type: ADD_TODO_ITEM,
    // }
    const action = getADDItemAction()
    store.dispatch(action)
    // this.setState(store.getState())
  }
  handleItemDelete(index) {
    // console.log(index);
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index: index
    // }
    const action = getDeleteItem(index)
    store.dispatch(action)
  }
}

export default TodoList