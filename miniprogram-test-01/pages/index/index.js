// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  
  onLoad() {
    wx.showLoading({title:"加载中..."});
  },
  onShow(){
	  wx.hideLoading();
  }
  
})
