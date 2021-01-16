<template>
  <div class="address-edit-box">
    <sHeader :name="`${type === 'add' ? '新增地址' : '修改地址'}`" ></sHeader>
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      :show-delete="type == 'edit'"
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
import { addAddressList, EditAddressList, getAddressDetail, DeleteAddressList } from '@/service/address'
import { Toast } from 'vant'
import { useRoute, useRouter } from 'vue-router'
export default {
  components: {
    sHeader
  },
  setup() {
    const router = useRouter();
    const route = useRoute()
    const state = reactive({
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {},
      },
      type: 'add',
      addressInfo: {},
      addressId: ''
    })

    onMounted( async () => {
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

      const { addressId, from, type } = route.query;
      state.addressId = addressId;
      state.type = type;
      state.from = from || '';
      if(type == 'edit'){
        const { data: addressDetail } = await getAddressDetail(addressId);
        let _areaCode = '';
        const province = tdist.getLev1();
        // Object.entries(state.areaList.county_list).forEach(([id,text]) => {
        //   // 先找到对应的区
        //   if(text == addressDetail.regionName){
        //     // console.log(text);
        //     const provinceIndex = province.findIndex(item => item.id.substr(0,2))
        //   }
        // })

        // 拿到省级code，利用省级code拿到市级code，利用市级code拿到县级code
        const toCode = (area, code) => {
          for(let key in tdist){
            if(tdist[key][0] == area && tdist[key][1] == code){
              return key;
            }
          }
        }
        let provinceCode = toCode(addressDetail.provinceName, '1')
        let cityode = toCode(addressDetail.cityName, provinceCode)
        let regionCode = toCode(addressDetail.regionName, cityode);
        // console.log(provinceCode);
        // console.log(cityode);
        // console.log(regionCode);
        _areaCode = regionCode;
        console.log(_areaCode);

        state.addressInfo = {
          id: addressDetail.addressId,
          name: addressDetail.userName,
          tel: addressDetail.userPhone,
          province: addressDetail.provinceName,
          city: addressDetail.cityName,
          county: addressDetail.regionName,
          addressDetail: addressDetail.detailAddress,
          areaCode: _areaCode,
          isDefault: !!addressDetail.defaultFlag
        }
      }
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
        defaultFlag: e.isDefault ? 1 : 0
      }

      if(state.type == 'edit'){
        params['addresId'] = state.addressId;
      }
      // 新增或者修改
      await state.type == 'add' ? addAddressList(params) : EditAddressList(params)
      Toast.success({ message: '保存成功',forbidClick: true});
      setTimeout(() => {
        router.back()
      },1000)
    }

    // 删除地址
    const onDelete = async () => {
      await DeleteAddressList(state.addressId);
      Toast('删除成功');
      setTimeout(() => {
        router.back();
      })
    }

    return {
      ...toRefs(state),
      onSave,
      onDelete
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