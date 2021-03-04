<template>
  <div>
    <SHead :back="false" :me="false" :name="'我的'"></SHead>
    <Unlogin v-if="!user"></Unlogin>
    <div class="wrapp" v-else>
      <div class="userwrapper">
        <div class="avatar" @click="preview([userInfo.avatar])" :style="`background-image:url(${userInfo.avatar})`"></div>
        <div class="user">
          <div class="username">用户名: &nbsp;{{userInfo.username}}</div>
          <div class="usertel">账号: &nbsp;{{userInfo.usertel}}</div>
        </div>
      </div>
      <div class="unlogin" @click="myrelease">我的发布</div>
      <div class="unlogin" @click="update">修改信息</div>
      <div class="unlogin">关于我们</div>
      <div class="unlogin" @click="quik">退出登录</div>
    </div>
    <navBar></navBar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import navBar from '@/components/NavBar'
import SHead from '@/components/SimpleHeader'
import Unlogin from '@/components/Unlogin'
import { ImagePreview, Dialog  } from 'vant';
export default {
  components: {
    navBar,
    SHead,
    Unlogin
  },
  data(){
    return {
      userInfo: {}
    }
  },
  methods: {
    ...mapActions(['reduceAction']),
    preview(item){
      ImagePreview(item);
    },
    quik(){
      Dialog.confirm({
      title: '操作',
      message: '确认退出登录吗',
    }).then(() => {
        // on confirm
        sessionStorage.removeItem('userInfo');
        this.reduceAction();
      })
      .catch(() => {
        // on cancel
      });
    },
    update(){
      this.$router.push({ path: 'userinfo', query: { userinfo: this.userInfo }})
    },
    myrelease(){
      this.$router.push({ path: 'myrelease', query: { usertel: this.userInfo.usertel }})
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created(){
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  }
}
</script>

<style lang="less" scoped>
.wrapp {
  margin: 43px auto 0;
  .unlogin {
    width: 260px;
    height: 60px;
    border-radius: 30px;
    margin: 10px auto;
    font-size: 26px;
    background-color:skyblue;
    line-height: 60px;
    font-weight: 700;
    text-align: center;
  }
}
.userwrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  margin-top: 10px;
  background-color: skyblue;
  .avatar {
    flex: 0 0 80px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .user{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .username {
      margin-bottom: 10px;
    }
  }
}

</style>