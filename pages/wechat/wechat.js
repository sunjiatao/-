// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden_menu: true, //二级菜单
    title: '服务',
    set_base_data: {} //页面内容的数据
  },
  //二级菜单隐藏
  menu() {
    var menu = this.data.hidden_menu
    this.setData({
      hidden_menu: !menu
    })
  },

  set_base_data() {
    var data = {
      header: {
        img: '/pages/image/wechat/wechat.jpg',
        title: '微信开发服务',
        en_title: 'WECHAT DEVELOPMENT SERVICE',
        detail: '根据您提出建站需求和网站要求，双方进行面对面的沟通和了解来明确建站目的及功能定位。通过和您的沟通了解, 我方出具一份详细专业网站策划方案，内有功能明细，页面设计数量，报价等。'
      },
      content: [{
        img: '/pages/image/wechat/wechat1.png',
        title: '微网站开发',
        decript: '根据您提出建站需求和网站要求，双方行提出建站需求和网站要求，双方行'
      }, {
        img: '/pages/image/wechat/wechat2.png',
        title: '微信公众号开发',
        decript: '建站需求和网站要求，双方行建站需求和网站要求，双方行阿达'
      }, {
        img: '/pages/image/wechat/wechat3.png',
        title: 'PC站和微信平台整合运营方案',
        decript: 'APP设计开发APP设计开发APP设计开发APP设计开发APP设计开发'
      }],
      footer: {
        img: '/pages/image/service/phone-bottom.jpg',
        title: '微信开发的优势',
        en_title: 'THE ADVANTAGES OF WECHAT DEVELOPMENT'
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
  }
})