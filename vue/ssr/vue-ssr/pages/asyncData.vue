<template>
  <div>
    <h1>姓名</h1>
    <h2>姓名</h2>
    <h3>姓名</h3>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
  data() {
    return {
      name: 'Hello Wn'
    }
  },
  async asyncData() {
    let { data } = await axios.get('https://m.maoyan.com/ajax/movie')
    console.log(data.movieList);
    return {info: data.movieList}
  }
}
</script>

<style>

</style>