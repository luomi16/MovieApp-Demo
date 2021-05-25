// pages/movie/movie.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 1.创建数组变量
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 3.调用执行
    var array = this.initData();
    // 4.设置data的变量
    this.setData({array:array});
    // 5.输出日志
    console.log(array);

  },
  /**
   * 2.自定义函数initData()
   */
  initData: function() {
    var array = [];
    var object1= new Object();
    object1.img = '/images/list/movie1.jpg';
    object1.title = '白蛇';
    object1.type = '动画';
    object1.liulan = '20696浏览';
    object1.pinlun = '122评论';
    array[0] = object1;

    var object2= new Object();
    object2.img = '/images/list/movie2.jpg';
    object2.title = '寒战';
    object2.type = '动作';
    object2.liulan = '20696浏览';
    object2.pinlun = '122评论';
    array[1] = object2;

    var object3= new Object();
    object3.img = '/images/list/movie3.jpg';
    object3.title = '活着';
    object3.type = '生活';
    object3.liulan = '20696浏览';
    object3.pinlun = '122评论';
    array[2] = object3;

    var object4= new Object();
    object4.img = '/images/list/movie4.jpg';
    object4.title = '激战';
    object4.type = '动作';
    object4.liulan = '20696浏览';
    object4.pinlun = '122评论';
    array[3] = object4;

    return array;
  }
})