<template>
  <div class="login-container">
    <img src="@/assets/daike.png" alt="" class="logo">
    <van-cell-group class="box">
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" label="密码" type="password" placeholder="请输入密码" />
      <van-field v-model="repassword" label="重复密码" type="password" placeholder="请再次输入密码" v-show="!islogin" />
    </van-cell-group>
    <van-row>
      <van-button size="small" type="default" @click="handleRegister">{{islogin ? '注册' : '已有账号'}}</van-button>
      <van-button size="small" type="primary" class="btn-login" @click="handleLogin">{{islogin? '登录' : '注册并且登录'}}</van-button>
    </van-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      repassword: '',
      islogin: true,
    }
  },
  methods:{
    showLoginTip(status){
      this.$toast.loading({
        message:status,
        forbidClick:true,
        loadingType:'spinner',
        duration:0
      })
    },
    login(){
      this.$http.login({
        username:this.username,
        password:this.password
      }).then(res=>{
        console.log(res);
        this.$toast.clear();
        this.$router.push('/home');
      })
    },
    handleLogin() {
      if(this.username.trim() == '' || this.password.trim() == ''){
        this.$toast.fail('用户名密码或密码不能为空');
        return;
      }
      if(this.islogin){
        this.showLoginTip('登录中...')
        this.login();
        this.$toast.clear();
        this.$router.push('/home');
      }else{//注册并且登录
        if(this.repassword != this.password){
          this.$toast.fail('两次输入的密码不一致');
          return
        }
        this.showLoginTip('注册登录中...');
        this.$http.register({
          username: this.username,
          password: this.password
        }).then(res => {
          console.log(res);
        })
      }
    },
    handleRegister () {
      this.islogin = !this.islogin;
    },
  }
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 300px;
    margin: 100px 0 20px;
  }

  .box {
    width: 280px;
    margin-bottom: 20px;
  }

  .btn-login {
    margin-left: 20px;
  }
}
</style>