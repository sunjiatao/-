// pages/case_detail/case_detail.js
const App = getApp();
const wxParse = require('../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden_menu: true, //二级菜单
    title: '案例',
    base_data: {},
    info:null
  },
  //二级菜单隐藏
  menu() {
    var menu = this.data.hidden_menu
    this.setData({
      hidden_menu: !menu
    })
  },
  //设置模板的数据内容
  set_base_data() {
    var data = {
     copy: '北京思睿鸿途科技有限公司 版权所有©'
    }

    return data
  },
  //根据id获取案例详情
  getcase(id) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this
    wx.request({
      url: App.getApiUrl()+'/cases/isidgetcase?id=' + id,
      method: 'GET',
      success(res) {
        // console.log(res.data.content)
        // that.setData({info:res.data.content})
        var winfo = res.data.content
        wxParse.wxParse('info', 'html', winfo, that, 10)
        wx.hideLoading()
      }
    })
    

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = this.set_base_data()
    this.setData({
      base_data: data
    })
   
   // 根据id查询案例详情数据
    this.getcase(options.id)
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.hideLoading()
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