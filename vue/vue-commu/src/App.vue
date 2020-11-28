<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <Hello :message="title" @sendData="getData" :formHi="formHi"></Hello>
    {{formChild}}
    <Hi @sendHi="getHi"></Hi> -->
    <A></A>
    <B></B>
  </div>
</template>

<script>
// import Hello from '@/components/Hello'
// import Hi from '@/components/Hi'
import A from '@/components/A'
import B from '@/components/B'
export default {
  name: 'App',
  data () {
    return {
      title: '我爱我的祖国',
      formChild: '',
      formHi: ''
    }
  },
  components: {
    // Hello,
    // Hi
    A,
    B
  },
  methods:{
    getData (e) {
      console.log(e);
      this.formChild = e
    },
    getHi (e) {
      this.formHi = e
    }
  }
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
</style>
