// pages/auth/auth.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import { request } from "../../request/index";
import { login } from "../../utils/asyncWx";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //获取用户信息
  async handlegetUserInfo(e) {
    try {
      // console.log(e);
      //获取用户信息
      // encryptedData rawData iv signature code
      const { encryptedData, rawData, iv, signature } = e.detail;
      //获取小程序登录成功后的code
      const { code } = await login();
      const loginParams = { encryptedData, rawData, iv, signature, code }
      //发送请求
      console.log(loginParams, code);
      //没有权限 获取不到token
      // const { token } = await request({ url: "/users/wxlogin", data: loginParams, method: "POST" });
      // console.log(token);
      // //把token存入本地，并且跳回上一个页面
      // wx.setStorageSync("token", token);
      wx.navigateBack({
        delta: 1
      });
    }catch(error) {
      console.log(error);
    }
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