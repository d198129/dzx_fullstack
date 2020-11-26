<template>
  <div class="home">
    <ul>
      <li><router-link :to="{name:'Detail',params:{username:'张三'}}">张三</router-link></li>
      <li><router-link :to="{name:'Detail',params:{username:'李四'}}">李四</router-link></li>
      <li><router-link :to="{name:'Detail',params:{username:'张三'}}">张三</router-link></li>
      <li><router-link to="/detail王二">王二</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>