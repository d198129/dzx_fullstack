// pages/search/search.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import { request } from "../../request/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    //取消的按钮；
    isFocus:false
  },
  TimeId: null,
  handleInput(e) {
    // console.log(e);
    const { value } = e.detail;
    if (!value.trim()) {
      this.setData({
        goods: [],
        isFocus: false,
        //输入框的值
        inpValue:""
      })
      //值不合法
      return;
    }
    this.setData({
      isFocus: true
    });
    //发送请求获取参数
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      this.qsearch(value);
    },1000);
  },
  async qsearch(query) {
    const res = await request({ url: "/goods/qsearch", data: { query } });
    console.log(res);
    this.setData({
      goods:res
    })
  },
  //点击取消按钮
  handleCancel() {
    this.setData({
      inpValue: "",
      isFocus: false,
      goods:[]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})