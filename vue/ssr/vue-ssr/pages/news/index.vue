<template>
  <div>
    <h2>News Index</h2>
    <p>newsId:{{$route.params.id}}</p>
    <ul>
      <li><nuxt-link to="/">HOME</nuxt-link></li>
      <li><nuxt-link to="/news/123">news-1</nuxt-link></li>
      <li><nuxt-link to="/news/456">news-2</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
// transition: 'test'// 动画名
}
</script>

<style>

</style>
