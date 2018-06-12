Page({

  onTapJump:function(event){
    wx.navigateTo({
      url:"../post/post",
      success:function(){
        console.log("jump success")
      },
      fail:function(){
        console.log("jump failed")
      },
      complete:function(){
        console.log("jump complete")
      }
    });
  },
  
  onUnload:function(event){
     console.log("page welcome is unload");
  },
  
  onHide:function(event){
      console.log("page welcome is hide");
  },
})