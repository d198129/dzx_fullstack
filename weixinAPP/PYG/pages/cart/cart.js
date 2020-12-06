// pages/cart/cart.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import {
  getSetting,
  chooseAddress,
  openSetting,
  showModal
} from "../../utils/asyncWx";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  async handleChooseAddress() {
    // 获取收货地址
    try {
      const res1 = await getSetting();
      console.log(res1);
      const scopeAddress = res1.authSetting["scope.address"];
      console.log(res1.authSetting["scope.address"]);
      if (scopeAddress === false) {
        await openSetting();
      }
      const address = await chooseAddress();
      // console.log(res2);
      wx.setStorageSync("address", address);
    } catch (error) {
      console.log(error);
    }
  },
  handeItemChange(e) {
    //获取被修改的商品的id
    const goods_id = e.currentTarget.dataset.id;
    //获取购车数组
    let { cart } = this.data;
    let index = cart.findIndex(v => v.goods_id === goods_id);
    cart[index].checked = !cart[index].checked;
    this.setCart(cart);
  },
  //设置购物车状态 同时重新计算 底部工具栏的数据 全选 总价格 购买的数量
  setCart(cart) {
    let allChecked = true;
    let totalPrice = 0;
    let totalNum = 0;
    if (cart.length) {
      cart.forEach(v => {
        if (v.checked) {
          totalPrice += v.num * v.goods_price;
          totalNum += v.num;
        } else {
          allChecked = false;
        }
      });
    }
    allChecked = cart.length != 0 ? allChecked : false;
    this.setData({
      cart,
      allChecked,
      totalPrice,
      totalNum
    });
    wx.setStorageSync('cart', cart);
  },
  //商品全选/反选功能
  handleItemAllcheck() {
    let { cart, allChecked } = this.data;
    allChecked = !allChecked;
    cart.forEach(v => v.checked = allChecked);
    this.setCart(cart);
  },
  //加减商品数目加减
  async handleItemNumEdit(e) {
    const { operation, id } = e.currentTarget.dataset;
    let { cart } = this.data;
    const index = cart.findIndex(v => v.goods_id === id);
    if (cart[index].num === 1 && operation === -1) {
      const res = await showModal({ content: "您是否要删除？" })
      if (res.confirm) {
        cart.splice(index, 1);
        this.setCart(cart);
      }
    } else {
      cart[index].num += operation;
      this.setCart(cart);
    }
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
    const cart = wx.getStorageSync("cart") || [];
    this.setCart(cart);
    // every 数组方法 会遍历 会接收一个回调函数 那么 每一个回调函数都返回true 那么 every方法的返回值为true
    // const allChecked = cart.length ? cart.every(v => v.checked) : false;
    if (!address) {
      console.log('缓存中没有地址');
    }else {
      address.all = address.provinceName + address.cityName + address.county + address.detailInfo
      this.setData({
        address
      });
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