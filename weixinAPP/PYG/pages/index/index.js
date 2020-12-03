//引入 用来发送请求的 方法
import regeneratorRuntime from '../../lib/runtime/runtime';
import { request } from "../../request/index";
//index.js
//Page Object
Page({
    data: {
        //轮播图数组
        swiperList: [],
        //导航数组
        catesList: [],
        //楼层数据
        floorList: []
    },
    //options(Object)
    onLoad: function(options) {
        //发送异步请求获取轮播图 优化的手段可以通过es6的promise来解决这个问题
        // wx.request({
        //     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
        //     success: (result) => {
        //         console.log(result);
        //         this.setData({
        //             swiperList: result.data.message
        //         })
        //     },
        // });
        this.getSwiperList();
        this.getCatesList();
        this.getfloorList();
    },
    //获取轮播图
    getSwiperList() {
        request({ url: '/home/swiperdata' })
            .then(result => {
                this.setData({
                    swiperList: result
                })
            })
    },
    //获取 分类导航数据
    getCatesList() {
        request({ url: '/home/catitems' })
            .then(result => {
                this.setData({
                    catesList: result
                })
            })
    },
    //获取楼层数据
    getfloorList() {
        request({ url: '/home/floordata' })
            .then(result => {
                this.setData({
                    floorList: result
                })
            })
    },
    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap: function(item) {

    }
});