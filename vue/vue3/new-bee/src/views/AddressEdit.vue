<template>
  <div class="address-edit-box">
    <sHeader :name="'新增地址'" ></sHeader>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { onMounted, reactive, toRefs } from 'vue'
import { tdist } from '@/common/js/utils'
import { addAddressList, EditAddressList } from '@/service/address'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
export default {
  components: {
    sHeader
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {},
      },
      type: 'add'
    })

    onMounted(async() => {
      // 各省市区列表数据
      let _province_list = {};
      let _city_list = {};
      let _county_list = {};
      tdist.getLev1().forEach( p => {
        _province_list[p.id] = p.text;
        tdist.getLev2(p.id).forEach( c => {
          _city_list[c.id] = c.text;
          tdist.getLev3(c.id).forEach( q => {
            _county_list[q.id] = q.text;
          })
        })
      })
      state.areaList.province_list = _province_list;
      state.areaList.city_list = _city_list;
      state.areaList.county_list = _county_list;
    })

    const onSave = async (e) => {
      // console.log(e);
      const params = {
        userName: e.name,
        userPhone: e.tel,
        provinceName: e.province,
        cityName: e.city,
        regionName: e.county,
        detailAddress: e.addressDetail,
        defaultFlag: e.isDefault
      }
      // 新增或者修改
      await state.type == 'add' ? addAddressList(params) : EditAddressList(params)
      Toast.success({ message: '保存成功',forbidClick: true});
      setTimeout(() => {
        router.back()
      },1000)
    }

    return {
      ...toRefs(state),
      onSave
    }
  }
}
</script>

<style lang="less">
@import '../common/style/mixin';
.edit {
  .van-field__body {
    textarea {
      height: 26px!important;
    }
  }
}
.address-edit-box {
  margin-top: 44px;
  .van-address-edit {
    .van-button--danger {
      background: @primary;
      border-color: @primary;
    }
    .van-switch--on {
      background: @primary;
    }
  }
}
</style>