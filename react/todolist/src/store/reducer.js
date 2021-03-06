// 笔记本
// state:整个图书馆所有书籍的信息

const defaultState = {
  inputValue: '',
  list: []
}

// reduce可以接受state，但是绝不能修改state
export default (state = defaultState, action) => {
  // console.log(state, action);
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}