// pages/category/category.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import {
    request
} from "../../request/index";
Page({
    /**
     * 页面的初始数据
     */
    data: {
        //左侧菜单数据
        leftMenuList: [],
        //右侧的商品数据
        rightContent: [],
        //被点击的左侧菜单
        currentIndex: 0,
        //右侧内容的滚动条距离顶部距离
        scrollTop: 0
    },
    Cates: [],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //判断一下本地存储有没有旧的数据
        console.log(123);
        const Cates = wx.getStorageSync("cates");
        if (!Cates) {
            //不存在
            this.getCates();
        } else {
            //有旧的数据
            console.log(Cates);
            if (Date.now() - Cates.time > 1000 * 10) {
                this.getCates();
            } else {
                //用旧数据
                this.Cates = Cates.data;
                let leftMenuList = this.Cates.map((v) => {
                    return v.cat_name;
                });
                let rightContent = this.Cates[0].children;
                this.setData({
                    leftMenuList,
                    rightContent,
                });
            }
        }
    },
    //获取分类数据
    async getCates() {
        // request({
        //     url: "/categories",
        // }).then((res) => {
        //     // console.log(res);
        //     this.Cates = res.data.message;
        //     //把接口的数据存入本地存储中
        //     wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
        //     //构造左侧的大菜单数据
        //     let leftMenuList = this.Cates.map((v) => {
        //         return v.cat_name;
        //     });
        //     let rightContent = this.Cates[0].children;
        //     this.setData({
        //         leftMenuList,
        //         rightContent,
        //     });
        // });
        const res = await request({url: "/categories"});
        this.Cates = res;
        //把接口的数据存入本地存储中
        wx.setStorageSync("cates", {
            time: Date.now(),
            data: this.Cates
        });
        //构造左侧的大菜单数据
        let leftMenuList = this.Cates.map((v) => {
            return v.cat_name;
        });
        let rightContent = this.Cates[0].children;
        this.setData({
            leftMenuList,
            rightContent,
        });
    },
    //左侧菜单栏的点击事件
    handleItemTap(e) {
        console.log(e);
        const {
            index
        } = e.currentTarget.dataset;
        let rightContent = this.Cates[index].children;
        this.setData({
            currentIndex: index,
            rightContent,
            scrollTop: 0
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
});