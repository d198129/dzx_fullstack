<template>
  <div class="star-login">
    <SHead :back="true" :name="'登录'" :me="false"></SHead>
    <div class="login-wrapper">
      <div class="avatar" :style="`background-image:url(${avatar})`"></div>
      <div class="input-group">
        <label for="usernaem">账号</label>
        <input type="text" name="" id="username" v-model="username">
      </div>
      <div class="input-group input-group-panel">
        <label for="userpwd">密码</label>
        <input type="password" name="" id="userpwd" v-model="userpwd">
      </div>
      <van-radio-group v-model="radio" direction="horizontal">
        <van-radio name="1" checked-color="#1baeae" icon-size="16px">管理员</van-radio>
        <van-radio name="2" checked-color="#1baeae" icon-size="16px">用户</van-radio>
      </van-radio-group>
      <p class="forgot-pwd">忘记密码</p>
      <p class="sign" @click="login">登录</p>
    </div>
    <p class="register" @click="register">新用户点击去注册</p>
  </div>
</template>

<script>
import SHead from '@/components/SimpleHeader'
export default {
  components: {
    SHead
  },
  data(){
    return {
      avatar: require('../assets/img/avatar.png'),
      username: '',
      userpwd: '',
      radio: '2'
    }
  },
  methods: {
    login () {
      if (this.username.trim() == '' || this.userpwd.trim() == '') {
        this.$toast('账号或密码不能为空')
        return;
      }
      this.$http({
        method: 'post',
        url: this.$util.baseUrl + 'users/userLogin',
        data: {
          username:this.username.trim(),
          userpwd: this.userpwd.trim()
        }
      }).then(res => {
        // console.log(res);
        if(res.data.code === '80000'){
          sessionStorage.setItem('userInfo',JSON.stringify(res.data.data));
          this.$router.push('/noteClass');
        }
      })
      // console.log(this.radio);
    },
    register() {
      this.$router.push('/Register');
    },
  }
}
</script>

<style lang="less" scoped>
.van-radio-group {
  margin: 5px 40px 10px;
}
input {
  border: 0;
  outline: none;
}
.star-login {
  width: 100vw;
  height: 100vh;
  background: #fff;
  box-sizing: border-box;
  padding: 0 1.28rem;
  overflow: hidden;
  h1 {
    margin-top: 1.12rem;
    height: 0.693333rem;
    line-height: 0.693333rem;
    color: rgba(16, 16, 16, 1);
    font-size: 0.48rem;
    text-align: center;
    font-family: Arial;
  }
  .login-wrapper {
    width: 7.44rem;
    height: 11.773333rem;
    margin-top: 1.706667rem;
    border-radius: 0.266667rem;
    box-shadow: 0 0 0.533333rem 0 rgba(170, 170, 170, 1);
    border: 1px solid rgba(187, 187, 187, 1);
    overflow: hidden;
    .avatar {
      width: 2.4rem;
      height: 2.4rem;
      margin: 1.093333rem auto 0.773333rem;
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .input-group {
      width: 5.546667rem;
      height: 1.226667rem;
      line-height: 1.226667rem;
      display: flex;
      margin: 0 auto;
      opacity: 0.5;
      border-radius: 0.533333rem;
      border: 1px solid rgba(187, 187, 187, 1);
      padding-left: 0.533333rem;
      label {
        display: inline-flex;
        // flex: 1;
        width: 0.96rem;
        opacity: 0.3;
        color: rgba(16, 16, 16, 1);
        font-size: 0.373333rem;
        font-family: Arial;
      }
      input {
        display: inline-block;
        width: 100%;
        border-radius: 0.533333rem;
        padding-left: 10px;
        font-size: 0.373333rem;
      }
    }
    .input-group-panel {
      margin-top: 10px;
    }
    .forgot-pwd{
        margin:10px auto .36rem 1.973333rem; 
        height: .613333rem;
        line-height: .453333rem;
        opacity: 0.3;
        color: rgba(16, 16, 16, 1);
        font-size: .32rem;
        font-family: Arial;
    }
    .sign{
        margin: 0 auto;
        width: 5.546667rem;
        height: 1.226667rem;
        line-height: 1.226667rem;
        border-radius: .533333rem;
        background-color: rgba(51, 54, 67, 1);
        text-align: center;
        left: 169px;
        opacity: 0.8;
        color: rgba(255, 255, 255, 1);
        font-size: .48rem;
        font-family: Arial;
    }
  }
  .register {
    height: 0.613333rem;
    margin-top: 2.16rem;
    line-height: 0.613333rem;
    opacity: 0.3;
    color: rgba(16, 16, 16, 1);
    font-size: 0.373333rem;
    text-align: center;
    font-family: Arial;
  }
}
</style>
