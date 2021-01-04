<template>
  <h1>加载中{{loading}}</h1>
</template>

<script>
import { onUnmounted, ref } from 'vue'
export default {
  setup() {
    let loading = ref('')
    let i = 0;
    let arr = ['.','..','...','..']
    let time = setInterval(() => {
      loading.value = arr[i]
      i = (i + 1) % 4
    },350);
    onUnmounted(() => {
      clearInterval(time)
    })
    return { loading }
  }
}
</script>

<style>

</style>