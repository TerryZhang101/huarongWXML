// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     
  },
  
  onLoad:function(){
    var postList=[
      {
      object: {
        date: "Jan 28 2017"
      },
      title: "小时候的冰棍儿和雪糕",
      postImg: "/images/post/post-4.jpg",
      avatar: "/images/avatar/avatar-5.png",
      content: "冰棒与雪糕绝对不是同一样东西。3到5毛钱的雪糕如现在的哈根达斯。而5分1毛的冰棍儿就像现在的老冰棒。时过境迁，...",
      readingNum: 92,
      collectionNum: {
        array: [108]
      },
      commentNum: 7
    },
      {
        object: {
          date: "Jan 9 2017"
        },
        title: "从童年呼啸而过的火车",
        postImg: "/images/post/post-5.jpg",
        avatar: "/images/avatar/avatar-1.png",
        content: "现在是高铁了，时过境迁，时过境迁，...",
        readingNum: 92,
        collectionNum: {
          array: [108]
        },
        commentNum: 7
      },
      {
        object: {
          date: "Jan 29 2017"
        },
        title: "记忆里的春天",
        postImg: "/images/post/post-1.jpg",
        avatar: "/images/avatar/avatar-3.png",
        content: "记忆里的春天在那原野里，很美很美~，时过境迁，...",
        readingNum: 92,
        collectionNum: {
          array: [108]
        },
        commentNum: 7
      },
    ];
    this.setData({
       postList:postList
    })
  },
  onUnload: function (event) {
    console.log("page post is unload");
  },

  onHide: function (event) {
    console.log("page post is hide");
  },
 
})