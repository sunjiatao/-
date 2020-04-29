// pages/website/website.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden_menu: true, //二级菜单
    title: '案例',
    base_data: {},
     //案例数据
    cases: {
      page_num: 1,
      paging: 10,
      data: null

    },
    hidden:false
  },
  //分页加载案例数据
  loding() {
    // 开始加载数据 显示加载框
    wx.showLoading({
      title: '加载中...',
    })
    var p_num = this.data.cases.page_num;
    var pg = this.data.cases.paging;
    var currdata = this.data.cases.data
    var that = this;
    wx.request({
      url: App.getApiUrl() + '/cases/pagegetcases',
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "page_num": p_num,
        "paging": pg
      },
      success(res) {
        if(!res.data){
          that.setData({hidden:true})
          // console.log('已经到底了~')
        }else{
          p_num = p_num + 1
          if (currdata != null) {
            var cases = {
              page_num: p_num,
              paging: pg,
              data: currdata.concat(res.data)
            }

            that.setData({
              cases: cases
            })
          } else {
            var cases = {
              page_num: p_num,
              paging: pg,
              data: res.data
            }

            that.setData({
              cases: cases
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
        title: '网站建设',
        en_title: 'WEBSITE CONSTRUCTION',
        detail: '根据您提出建站需求和网站要求，双方进行面对面的沟通和了解来明确建站目的及功能定位。通过和您的沟通了解,我方出具一份详细专业网站策划方案，内有功能明细，页面设计数量，报价等。'
      },
      content: [{
        img: '/pages/image/website/website1.png',
        title: '品牌官网',
        decript: '根据您提出建站需求和网站要求，双方行提出建站需求和网站要求，双方行'
      }, {
        img: '/pages/image/website/website2.png',
        title: '集团官网',
        decript: '建站需求和网站要求，双方行建站需求和网站要求，双方行阿达'
      }, {
        img: '/pages/image/website/website3.png',
        title: '营销型网站',
        decript: 'APP设计开发APP设计开发APP设计开发APP设计开发APP设计开发'
      }, {
        img: '/pages/image/website/website4.png',
        title: '响应式网站',
        decript: 'H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发'
      }, {
        img: '/pages/image/website/website5.png',
        title: 'H5网站',
        decript: 'H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发'
      }, {
        img: '/pages/image/website/website6.png',
        title: '在线购物平台',
        decript: 'H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发H5抽奖社交游戏开发'
      }],
      footer: {
        img: '/pages/image/service/phone-bottom.jpg',
        title: '网站建设流程',
        en_title: 'WEBSITE CONSTRUCTION PROCESS'
      },
      liucheng_img: '/pages/image/service/website-pic.jpg',
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


    //先加载一次cases数据
    this.loding();
  },
  onReachBottom() {
    this.loding();
  }
})