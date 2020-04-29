App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  },
  //定义电话
  phone_num() {
    var call = {
      phone: '010-56153651',
      title: '联系我们',
      content: '拨打电话'
    }
    return call
  },
  //定义地图
  map() {
    var map = {
      latitude: Number('40.05028801807650'),
      longitude: Number('116.41424614800347'),
      name: '北京思睿鸿图科技有限公司',
      address: '北京市朝阳区汤立路218号明天生活馆C座7层',
      markers: [{
        "id": 0,
        "latitude": Number('40.05028801807650'),
        "longitude": Number('116.41424614800347'),
        "title": "北京市思睿鸿途科技有限公司",
        "zIndex": 999
      }]
    }
    return map;
  },

  //定义 我们的服务 数据
  service_son_url() {
    var url = new Array([{
      url: '/pages/website/website',
      img_url: '/pages/image/service1.jpg',
      text: '高端定制网站建设'
    }, {
      url: '/pages/phone/phone',
      img_url: '/pages/image/service2.jpg',
      text: '移动互联网解决方案'
    }], [{
      url: '/pages/maintain/maintain',
      img_url: '/pages/image/service3.jpg',
      text: '网站维护'
    }, {
      url: '/pages/domain/domain',
      img_url: '/pages/image/service4.jpg',
      text: '域名主机'
    }], [{
      url: '/pages/wechat/wechat',
      img_url: '/pages/image/service5.jpg',
      text: '微信定制开发'
    }, {
      url: '/pages/service/service',
      img_url: '/pages/image/service6.jpg',
      text: '项目咨询'
    }])

    return url
  },
  getApiUrl(){
    return 'http://bjsrht.cn/api.php'
  }


})