<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/header/Header"
export default {
  components: {
    Header
  }
}
</script>

<style lang="stylus">

</style>
