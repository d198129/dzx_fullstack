<template>
  <header class="simple-header">
    <van-icon name="arrow-left" @click="goBack" v-if="back" />
    <i v-else>&nbsp;</i>
    <div class="simple-header-name">{{name}}</div>
    <van-icon name="weapp-nav" @click="goUser" v-if="me" />
    <i v-else>&nbsp;</i>
  </header>
</template>

<script>
export default {
  props: ['name','back','me'],
  methods: {
    goBack(){
      // console.log(this.back);
      this.$router.go(-1);
    },
    goUser(){
      this.$router.push('/me')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.simple-header {
  background-color: #33cccc !important;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .fj();
  .wh(100%,44px);
  line-height: 44px;
  padding: 0 10px;
  .boxSizing();
  color: #252525;
  background-color: #fff;
  border-bottom: 1px solid #dcdcdc;
  font-size: 20px;
  .van-icon{
    line-height: 44px;
  }
}

</style>