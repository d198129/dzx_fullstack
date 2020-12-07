// pages/pay/pay.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import { requestPayment, showToast } from "../../utils/asyncWx";
import { request } from '../../request/index'
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
  async handleOrederPay() {
    try {
      const token = wx.getStorageSync("token");
      if (!token) {
        wx.navigateTo({
          url: '/pages/auth/auth',
        });
        return;
      }
      console.log("已经存在tken");
      const header = { Authorization: token };
      //准备 请求体参数
      const order_price = this.data.totalPrice;
      const consignee_addr = this.data.address.all;
      const cart = this.data.cart;
      let goods = [];
      cart.forEach(v => goods.push({
        goods_id: v.goods_id,
        goods_number: v.num,
        goods_price: v.goods_price
      }));
      const orderParams ={ order_price,consignee_addr,goods }
      const { order_number } = await request({ url: "/my/orders/create", method: "POST", data: orderParams, header: header });
      const { pay } = await request({ url: "/my/orders/req_unifiedorder", method: "POST", data: { order_number }, header: header });
      const res = await requestPayment(pay);
      // console.log(res);
      //查询后台
      const res1 = await request({ url: "/my/orders/chkOrder", method: "POST", data: { order_number }, header: header });
      await showToast({ title: "支付成功" });
      // 手动删除缓存中 已经支付了的商品
      let newCart = wx.getStorageSync("cart");
      newCart = newCart.filter(v => !v.checked);
      wx.getStorageSync("cart",newCart);
      wx.navigateTo({
        url: '/pages/order/order',
      });
        
    } catch (error) {
      await showToast({ title: "支付失败" });
      console.log(error);
    }
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