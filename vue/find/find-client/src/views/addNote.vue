<template>
  <div>
    <SHead :back="true" :name="'发布'" :me="false"></SHead>
    <div class="wrapper">
      <van-cell-group>
        <van-field
          readonly
          clickable
          label="标题"
          :value="title"
          placeholder="选择类别 "
          @click="showPicker1 = true"
        />
        <van-popup v-model="showPicker1" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker1 = false"
            @confirm="onConfirm1"
          />
        </van-popup>
        <van-field type="textarea" v-model="value" label="内容" autosize placeholder="请输入描述" maxlength="50" show-word-limit />
      </van-cell-group>
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="time"
        label="时间选择"
        placeholder="点击选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="time"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-uploader v-model="fileList" multiple :max-count="6" :after-read="afterRead" />
      <div class="fabu" @click="addnote">发布</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import SHead from '@/components/SimpleHeader'
export default {
  components: {
    SHead
  },
  data() {
    return {
      fileList: [],
      title: '',
      value: '',
      time: '',
      showPicker: false,
      showPicker1: false,
      columns: ['一卡通', '身份证', '钥匙', '伞', '洗澡卡', '手机', '书', '其他'],
    }
  },
  methods: {
    afterRead(e){
      console.log(e);
    },
    onConfirm(time) {
      this.time = time;
      console.log(time);
      this.showPicker = false;
    },
    onConfirm1(value) {
      this.title = value;
      this.showPicker1 = false;
    },
    addnote(){
      if (this.title.trim() == '') {
        Toast.fail({
          message:'标题不能为空',
          forbidClick: true,
          duration: 1000
        });
        return;
      }
      if (this.value.trim() == '') {
        Toast.fail({
          message:'内容不能为空',
          forbidClick: true,
          duration: 1000
        });
        return;
      }
      if (this.time.trim() == '') {
        Toast.fail({
          message:'请输入时间',
          forbidClick: true,
          duration: 1000
        });
        return;
      }
      if (this.fileList.length < 2) {
        Toast.fail({
          message:'请上传至少两张图片',
          forbidClick: true,
          duration: 1000
        });
        return;
      }
      let picture = [];
      this.fileList.forEach(item => {
        picture.push(item.content);
      })
      let usertel = this.$route.query.usertel;
      let time = this.time;
      let title = this.title;
      let desc = this.value;
      this.$http({
        method: 'post',
        url: this.$util.baseUrl + 'notes/addnote',
        data: {
          usertel: usertel,
          time: time,
          title: title,
          desc: desc,
          picture: picture
        }
      }).then(res => {
        // console.log(res);
        if(res.data.code = '8000'){
          Toast.success({
            message: res.data.mess,
            forbidClick: true,
            duration: 1500
          });
          this.$router.go(-1);
        }else{
          Toast.fail({
            message: '发布失败',
            forbidClick: true,
            duration: 1500
          })
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="less" scoped>
.van-uploader {
  margin-top: 20px;
}
.wrapper {
  margin-top: 44px;
  .fabu {
    width: 240px;
    height: 60px;
    border-radius: 30px;
    background-color: skyblue;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    margin: 20px auto;
  }
}
</style>