<template>
  <div>
    <SHead :back="false" :name="'消息'" :me="true"></SHead>
    <navBar></navBar>
  </div>
</template>

<script>
import navBar from '@/components/NavBar'
import SHead from '@/components/SimpleHeader'
export default {
  components: {
    navBar,
    SHead
  }
}
</script>

<style>

</style>