<template>
  <h1>一个异步组件</h1>
</template>

<script>
export default {
  name: 'AsyncComponent',
  props: {
    timeout: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>

</style>