<template>
  <div class="container">
    <ul>
      <li><nuxt-link :to="{name: 'index'}">首页</nuxt-link></li>
      <li><nuxt-link to="/about">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name: 'news',params:{id: '123'}}">News</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
