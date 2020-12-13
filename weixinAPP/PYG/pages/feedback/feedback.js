// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        id: 0,
        value: "体验问题",
        isActive: true
      },
      {
        id: 1,
        value: "商品、商家投诉",
        isActive: false
      }
    ],
    //被选中的图片的路径
    chooseImgs: [],
    //文本域
    textVal:""
  },
  UploadImgs:[],
  handletabsItemChange(e) {
    const { index } = e.detail;
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
    this.setData({
      tabs
    })
  },
  //点击加号选择事件
  handleChooseImg() {
    // 调用小程序内置的选择图片api
    wx.chooseImage({
      count: 9,//图片的数量
      sizeType: ['original', 'compressed'],//格式： 原图 压缩
      sourceType: ['album', 'camera'],//图片来源 相册 照相机
      success: (result) => {
        // console.log(result);
        this.setData({
          chooseImage: [...this.data.chooseImage, ...result.tempFilePaths],
        })
      }
    })
  },
  //点击自定义组件
  handelRemove() {
    const { index } = e.currentTarget.dataset;
    let { chooseImg } = this.data;
    chooseImg.splice(index, 1);
    this.setData({
      chooseImgs
    })
  },
  //文本域的输入
  handleTextInput(e) {
    this.setData({
      textVal: e.detail.value
    })
  },
  //提交
  handelFormSubmit() {
    const { textval, chooseImage } = this.data;
    if (!textval.trim()) {
      wx.showToast({
        title: '输入为空',
        icon: 'none',
        mask: true
      });  
      return;
    }
    wx.showLoading({
      title: '正在加载中',
      mask: true
    });
    if (chooseImgs.length != 0) {
      chooseImgs.forEach((v,i)=>{
        wx.uploadFile({
          //图片要上传的路径
          url: 'https://images.ac.cn',
          //被上传的文件的路径
          filePath: v,
          name: "file",
          formData: {},
          success: (result) => {
            console.log(result);
            let url = JSON.parse(result.data);
            this.UploadImgs.push(url);
            if (i === chooseImgs.length - 1) {
              wx.hideLoading();
              console.log("文本的内容提交到外网");
              this.setData({
                textVal: "",
                chooseImgs:[]
              })
              wx.navigateBack({
                delta: 1
              });
                
            }
          }
        });
      })
    } else {
      console.log('只是提交了文本');
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