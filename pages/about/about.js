// pages/website/website.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden_menu: true, //二级菜单
    title: '我们',
    base_data: {}
  },
  tap_pic() {
    wx.previewImage({
      urls: ['http://www.bjsrht.cn/Public/Phone/images/website-pic.jpg'],
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
        img: '/pages/image/about.jpg',
        title: '资深全网营销解决方案提供商',
        en_title: 'SIRUIHONGTU',
        detail: '北京思睿鸿途科技有限公司是专业从事企业互联网营销策划公司为企业的互联网化提供全方位的服务。现公司主要业务有互联网营销策划、网站建设、H5手机网站建设、微信微博运营推广、平面设计程序开发等业务。以客户为中心是我们的核心服务理念，一次合作终身朋友，是我们奉行的宗旨；我们不仅仅把客户当客户还把客户视为我们的合作伙伴诚心为客户在网络推广解决困难，与客户共进退, 共同奋斗鸿大前途！'
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
        img: '/pages/image/about/about2.jpg',
        title: '联系我们',
        en_title: 'CONTACT US'
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
  }

})