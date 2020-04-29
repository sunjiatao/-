// pages/website/website.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden_menu: true, //二级菜单
    title: '资讯',
    base_data: {},
    //资讯数据
    news: {
      page_num: 1,
      paging: 15,
      data: null

    },
    hidden: false
  },
  //分页加载资讯数据
  loding() {
    // 开始加载数据 显示加载框
    wx.showLoading({
      title: '加载中...',
    })
    var p_num = this.data.news.page_num;
    var pg = this.data.news.paging;
    var currdata = this.data.news.data
    var that = this;
    wx.request({
      url: App.getApiUrl() + '/news/pagegetnews',
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "page_num": p_num,
        "paging": pg
      },
      success(res) {
        if (!res.data) {
          that.setData({ hidden: true })
          // console.log('已经到底了~')
        } else {
          p_num = p_num + 1
          if (currdata != null) {
            var news = {
              page_num: p_num,
              paging: pg,
              data: currdata.concat(res.data)
            }

            that.setData({
              news: news
            })
          } else {
            var news = {
              page_num: p_num,
              paging: pg,
              data: res.data
            }

            that.setData({
              news: news
            })
          }
        }

        // console.log(p_num)
        // 加载完成关闭loading
        wx.hideLoading()

      }
    })
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
      header: {
        img: '/pages/image/case/case.jpg',
      },
      copy: '北京思睿鸿途科技有限公司 版权所有©'
    }

    return data
  },
  onLoad() {
    //设置模板里的数据内容
    var data = this.set_base_data()
    this.setData({
      base_data: data
    })


    //先加载一次news数据
    this.loding();
  },
  onReachBottom() {
    this.loding();
  }
})