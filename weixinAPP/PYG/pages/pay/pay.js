// pages/pay/pay.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import {
  getSetting,
  chooseAddress,
  openSetting,
  showModal,
  showToast
} from "../../utils/asyncWx";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    totalPrice: 0,
    totalNum: 0
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
    // console.log('123');
    let address = wx.getStorageSync('address');
    if (!address) {
      console.log('缓存中没有地址');
    }else {
      address.all = address.provinceName + address.cityName + address.county + address.detailInfo
      this.setData({
        address
      });
    }
    let cart = wx.getStorageSync("cart") || [];
    cart = cart.filter(v=>v.checked)
    let totalPrice = 0;
    let totalNum = 0;
    if (cart.length) {
      cart.forEach(v => {
          totalPrice += v.num * v.goods_price;
          totalNum += v.num;
      });
    }
    this.setData({
      cart,
      totalPrice,
      totalNum
    });
  },
  handleOrederPay() {
    const token = wx.getStorageSync("token");
    if (!token) {
      wx.navigateTo({
        url: '/pages/auth/auth',
      });
      return;
    }
    console.log("已经存在tken");
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