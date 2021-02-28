<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link tag="li" class="nav-list-item" to="home">
        <van-icon name="location" />
        <span>首页</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="friend">
        <van-icon name="friends" />
        <span>朋友</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="news">
        <van-icon name="bell" />
        <span>消息</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="me">
        <van-icon name="manager" />
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="less" scoped >
@import '../common/style/mixin';
.nav-bar{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #ccc;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  .nav-list {
    width: 100%;
    .fj();
    flex-direction: row;
    padding: 0;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #666;
      &.router-link-active {
        color: @primary;
      }
      i {
        text-align: center;
        font-size: 22px;
      }
      span{
        font-size: 12px;
      }
    }
  }
}
</style>