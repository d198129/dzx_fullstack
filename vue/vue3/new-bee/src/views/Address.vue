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
import { getAddressList } from '@/service/address'
import { useRouter, useRoute } from 'vue-router'
export default {
  components: {
    sHeader
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      list: [],
      from: route.query.from
    })

    onMounted( async () => {
      // 请求所有的地址列表
      const { data } = await getAddressList();
      // console.log(data);
      if(!data){
        state.list = [];
        return;
      }
      //
      state.list = data.map( item => {
        return {
          id : item.addressId,
          name: item.userName,
          tel: item.userPhone,
          address: `${item.provinceName} ${item.cityName} ${item.regionName} ${item.detailAddress}`,
          isDefault: !!item.defaultFlag
        }
      })
      //
    })

    // 新增地址
    const onAdd = () => {
      router.push({ path: '/address-edit',query: { type: 'add', from: state.from }})
    }

    // 选中地址
    const select = (itme) => {
      // console.log(item);
      router.push({ path: '/create-order', query: { addressId: item.id, from: state.from } } )
    }
    // 修改地址
    const onEdit = (item) => {
      router.push({ path: '/address-edit', addressId: item.id, from: state.from })
    }

    return {
      ...toRefs(state),
      onAdd,
      onEdit
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