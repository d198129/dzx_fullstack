// pages/good_detail/good_detail.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import { request } from "../../request/index";
import { showToast } from '../../utils/asyncWx'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {},
    isCollect:false
  },
  GoodsInfo: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { goods_id } = options;
    this.getGoodsDetail(goods_id);
  },
  async handelCollection() {
    let isCollect = !this.data.isCollect;
    if (isCollect) {
      await showToast({ title: "收藏成功" });
    }else{
      await showToast({ title: "取消成功" });
    }
    this.setData({
      isCollect:isCollect
    })
  },
  async getGoodsDetail(goods_id) {
    const goodsObj = await request({ url: "/goods/detail", data: { goods_id } });
    this.GoodsInfo = goodsObj;
    // console.log(goodsObj);
    this.setData({
      goodsObj: {
        goods_name: goodsObj.goods_name,
        goods_price: goodsObj.goods_price,
        goods_introduce: goodsObj.goods_introduce.replace(/\.webp/g,'.jpg'),
        pics:goodsObj.pics
      }
    })
  },
  handlePrevewImage(e) {
    const urls = this.GoodsInfo.pics.map( v => v.pics_mid)
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls
    }); 
  },
  //点击加入购物车
  handleCartAdd(e) {
    let cart = wx.getStorageSync('cart')||[];
    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id)
    if (index === -1) {
      //不存在 第一次添加
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo);
    } else {
      cart[index].num++;
    }
    wx.setStorageSync("cart", cart);
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true
    });
      
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