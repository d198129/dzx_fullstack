<template>
  <div class="login">
    <!-- 头部 -->
    <sHeader :name="type == 'login' ? '登录' : '注册'"></sHeader>
    <img class="logo" src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="">
    <!-- 登录 -->
    <div class="login-body login" v-if="type == 'login'">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="verify"
          name="验证码"
          label="验证码"
          placeholder="输入验证码"
        >
          <template #button>
            <vue-img-verify ref="verifyRef"></vue-img-verify>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <div class="link-register" @click="toggle('register')">立即注册</div>
          <van-button round block type="info" color="#1baeae" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <!-- 注册 -->
    <div class="login-body register" v-else>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username1"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password1"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="verify"
          name="验证码"
          label="验证码"
          placeholder="输入验证码"
        >
          <template #button>
            <vue-img-verify ref="verifyRef"></vue-img-verify>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <div class="link-login" @click="toggle('login')">已有登录账号</div>
          <van-button round block type="info" color="#1baeae" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { reactive, ref, toRefs } from 'vue'
import vueImgVerify from '@/components/vueImgVerify'
import { Toast } from 'vant'
import { register, login } from '@/service/user'
import md5 from 'js-md5'
import { setLocal } from '@/common/js/utils'
import { useRouter } from 'vue-router'
export default {
  components: {
    sHeader,
    vueImgVerify
  },
  setup() {
    const router = useRouter();
    const verifyRef = ref(null);
    const state = reactive({
      username: '',
      username1: '',
      password: '',
      password1: '',
      verify: '',
      type: 'login',
      imgCode: ''
    })

    const toggle = (v) => {
      state.type = v,
      state.verify = ''
    }

    const onSubmit = async () => {  //value
      console.log(verifyRef.value.imgCode); // 通过ref.value可以获取到组件中内setup函数返回的值
      state.imgCode = verifyRef.value.imgCode || '';
      if(state.verify.toLowerCase() !== state.imgCode.toLowerCase()){
        Toast.fail('验证码有误')
        return;
      }
      if(state.type == 'login'){ // 登录
        const { data } = await login({
          'loginName': state.username,
          'passwordMd5': md5(state.password)
        })
        // token { data } 保存在本地
        setLocal('token',data);
        router.push('/home')
      }else{ // 注册
        await register({
          "loginName": state.username1,
          "password": state.password1
        })
        Toast.success('注册成功');
        state.type = 'login';
        state.verify = '';
      }
    }
    return {
      ...toRefs(state),
      verifyRef,
      toggle,
      onSubmit
    }
  }
}
</script>

<style lang="less" scoped>
  .login {
    .logo {
      width: 120px;
      height: 120px;
      display: block;
      margin: 80px auto 20px;
    }
    .login-body {
      padding: 0 20px;
    }
    .login {
      .link-register {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .register {
      .link-login {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .verify-bar-area {
      margin-top: 24px;
      .verify-left-bar {
        border-color: #1baeae;
      }
      .verify-move-block {
        background-color: #1baeae;
        color: #fff;
      }
    }
    .verify {
      >div {
        width: 100%;
      }
      display: flex;
      justify-content: center;
      .cerify-code-panel {
        margin-top: 16px;
      }
      .verify-code {
        width: 40%!important;
        float: left!important;
      }
      .verify-code-area {
        float: left!important;
        width: 54%!important;
        margin-left: 14px!important;
        .varify-input-code {
          width: 90px;
          height: 38px!important;
          border: 1px solid #e9e9e9;
          padding-left: 10px;
          font-size: 16px;
        }
        .verify-change-area {
          line-height: 44px;
        }
      }
    }
  }
</style>