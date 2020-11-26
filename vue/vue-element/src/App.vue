<template>
  <div class="page">
    <p>
      <router-link to="/">首页</router-link>|
      <router-link to="/about">关于</router-link>
    </p>
    <!-- 路由入口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  components:{
  }
}
</script>

<style>
.page{
  text-align: center;
}
p{
  text-align: center;
}
</style>