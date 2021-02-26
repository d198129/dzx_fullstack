<template>
  <div>
    <SHead :back="false" :me="false" :name="'我的'"></SHead>
    <Unlogin v-if="user"></Unlogin>
    <navBar></navBar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import navBar from '@/components/NavBar'
import SHead from '@/components/SimpleHeader'
import Unlogin from '@/components/Unlogin'
export default {
  components: {
    navBar,
    SHead,
    Unlogin
  },
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>

</style>