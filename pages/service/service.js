const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden_menu: true, //二级菜单
    title: '服务',
    service_url: App.service_son_url(), //我们的服务,子类数据
    phone_num: App.phone_num().phone, //电话
    //地图
    map: App.map()
  },
  //二级菜单隐藏
  menu() {
    var menu = this.data.hidden_menu
    this.setData({
      hidden_menu: !menu
    })
  },
  //拨打电话
  Call() {
    var num = App.phone_num()
    var phone_num = num.phone //电话号码
    wx.showModal({
      title: num.title, //标题
      content: num.content + phone_num, //描述
      success(res) {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: phone_num,
            success(e) {
              console.log(e)
            },
            fail(e) {
              console.log(e)
            }
          })
        }
      }
    })


  },
  //打开地图信息
  go_map() {
    var map = App.map()
    console.log(map)
    wx.openLocation({
      longitude: map.longitude,
      latitude: map.latitude,
      name: map.name,
      address: map.address
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})