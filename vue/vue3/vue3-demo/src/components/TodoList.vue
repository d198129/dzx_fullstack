<template>
  <section class="todoapp">
    <header class="header">
      <h1>vue3 todos</h1>
      <input type="text" class="new-todo" placeholder="想干的事" v-model="value1" @keyup.enter="press">
    </header>
    <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="(todo,index) in todos" :key="todo.id" :class="{completed: todo.complete}">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.complete">
            <label>{{todo.title}}</label>
            <button class="destroy" @click="remove(index)"></button>
          </div>
        </li>
      </ul>
    </section>
    <div class="footer">
      <span class="todo-count">
        <strong>{{remaining}}</strong> left
      </span>
      <button class="clear-completed" @click="removeComplete">Clear completed</button>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
export default {
  setup(){
    let state = reactive({
      todos: [],
      value1: ''
    })
    function press () {
      console.log(state.value1);
      let value = state.value1 && state.value1.trim()
      state.todos.push({id: state.todos.length,title: value,complete: false})
      state.value1 = ''
      // console.log(state.todos);
    }
    function remove (index) {
      state.todos.splice(index,1)
    }
    function removeComplete () {
      state.todos = state.todos.filter(item => !item.complete)
    }
    let remaining = computed(() => state.todos.filter(thing => !thing.complete).length)
    return { ...toRefs(state), press, remove, remaining, removeComplete }
  }
}
</script>

<style>

</style>