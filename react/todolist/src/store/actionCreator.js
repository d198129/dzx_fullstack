import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getADDItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const getTodolost = () => {
  return (dispatch) => { // 本来action必须是一个对象，因为用了thunk，现在他可以是函数
    // 接口请求
  }
}