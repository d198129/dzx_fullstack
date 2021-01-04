<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{state.count}}</h1>
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>
  <button @click="dele">累减</button>
  <!-- <ul>
    <Fargment :data="[5,3,4,1,8,9,2]"></Fargment>
  </ul> -->
  <!-- <Teleporta></Teleporta> -->
  <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000"></AsyncComponent>
    </template>
    <template #fallback>
      <Loading></Loading>
    </template>
  </Suspense>
  <TodoList></TodoList>
</template>

<script>
//composition api
import { reactive, computed, ref,onMounted } from 'vue';
// import Fargment from '@/components/Fargment'
// import Teleporta from '@/components/Teleport'
import AsyncComponent from '@/components/AsyncComponent'
import Loading from '@/components/Loading'
import TodoList from '@/components/TodoList'
export default {
  setup() { //入口
    // const state = reactive({
    //   count: 1,
    // })
    const {state, double} = useCount(1)
    function add() {
      state.count++;
      num.value += 10;
    }
    function dele() {
      state.count--;
    }
    let num = ref(2)
    // const double = computed(() => state.count * 2)
    onMounted(() => {
      console.log('onMounted');
    })
    return {state, add, dele, double, num}
  },
  components:{
    // Fargment,
    // Teleporta
    AsyncComponent,
    Loading,
    TodoList
  }
}
function useCount(count) {
  const state = reactive({
    count
  })
  const double = computed(() => state.count * 2)

  return {state, double}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header.fixed{
  background: #fff;
  position: fixed;
  top:0;
  left:0;
  right:0;
  width:100%;
  z-index:100;
}

</style>
