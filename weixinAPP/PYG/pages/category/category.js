// pages/category/category.js
import { request } from "../../request/index";
Page({
    /**
     * 页面的初始数据
     */
    data: {
        //左侧菜单数据
        leftMenuList: [],
        //右侧的商品数据
        rightContent: [],
    },
    Cates: [],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getCates();
    },
    //获取分类数据
    getCates() {
        request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
        }).then((res) => {
            console.log(res);
            this.Cates = res.data.message;
            //构造左侧的大菜单数据
            let leftMenuList = this.Cates.map((v) => {
                return v.cat_name;
            });
            let rightContent = this.Cates[0].children;
            this.setData({
                leftMenuList,
                rightContent,
            });
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {},
});