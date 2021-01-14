<template>
<div class="address-box">
  <sHeader :name="'地址管理'" ></sHeader>
  <div class="address-item">
    <van-address-list
      v-if="from != 'mine'"
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="select"
    />
    <van-address-list
      v-else
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { onMounted, reactive, toRefs } from 'vue'
export default {
  components: {
    sHeader
  },
  setup() {
    const state = reactive({
      list: []
    })

    onMounted(() => {
      // 请求所有的地址列表
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less">
  @import '../common/style/mixin';
  .address-box {
    .van-radio__icon {
      display: none;
    }
    .address-item {
      margin-top: 44px;
      .van-button {
        background: @primary;
        border-color: @primary;
      }
    }
  }
</style>