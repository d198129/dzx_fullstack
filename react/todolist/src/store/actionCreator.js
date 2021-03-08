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