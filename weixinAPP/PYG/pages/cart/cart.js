// pages/cart/cart.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import {
  getSetting,
  chooseAddress,
  openSetting
} from "../../utils/asyncWx";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  async handleChooseAddress() {
    // 获取收货地址
    try {
      const res1 = await getSetting();
      console.log(res1);
      const scopeAddress = res1.authSetting["scope.address"];
      console.log(res1.authSetting["scope.address"]);
      if (scopeAddress === true) {
        await openSetting();
      }
      const res2 = await chooseAddress();
      console.log(res2);
    } catch (error) {
      console.log(error);
    }
  },
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