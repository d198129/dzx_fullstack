<template>
  <div class="b">
    BBBBBBBB{{msg}}
  </div>
</template>

<script>
import Bus from '@/bus/index'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('sendA',(e)=>{
      this.msg = e
    })
  }
}
</script>

<style>

</style>