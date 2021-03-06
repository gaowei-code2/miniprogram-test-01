// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	canIUseGetUserProfile:false,
	hasUserInfo:false,
	userInfo:{}
  },
  
  wxlogin: function(){
	  wx.login({
		  success:function(res){
			  wx.showToast({title:res.code})
		  }
	  })
  },
  
  getUserProfile: function(){
	  wx.getUserProfile({
		  desc:"登录",
		  success:(res)=>{
			  this.setData({
				  userInfo:res.userInfo,
				  hasUserInfo:true  
			  })
		  }
	  });
  },
  
  getLimit: function(){
	  wx.authorize({
		  scope:"scope.userLocation",
		  success:(res)=>{
			  wx.showToast("授权成功")
		  }
	  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	if(wx.getUserProfile){
		this.setData({canIUseGetUserProfile:true})
	}
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