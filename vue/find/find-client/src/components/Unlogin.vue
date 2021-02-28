<template>
  <div class="wrapper">
    <div class="picture"></div>
    <div class="login" @click="goLoin">去登录</div>
    <div class="picture2"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goLoin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  .picture{
    width: 330px;
    height: 110px;
    background-image: url('../assets/img/no.png');
    background-size: 100% 100%;
  }
  .picture2{
    width: 370px;
    height: 180px;
    background-image: url('../assets/img/dog.png');
    background-size: 100% 100%;
  }
  .login{
    width: 200px;
    height: 100px;
    font-size: 30px;
    background-color: #1baeae;
    line-height: 100px;
    text-align: center;
    box-shadow: 3px 4px 20px #000;
    margin: 25px auto;
  }
}
</style>