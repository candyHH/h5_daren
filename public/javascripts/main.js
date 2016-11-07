
// 监听查看达人资料事件
$('.daren-wang-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_wang', 'click', '0']);
});
$('.daren-tang-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_tang', 'click', '0']);
});
$('.daren-pang-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_pang', 'click', '0']);
});
$('.daren-ku-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_ku', 'click', '0']);
});

// 监听返回首页事件
$('.return-index-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_index', 'click', '0']);
});

//监听报名事件
$('.sign-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_sign', 'click', '0']);
});

//监听观看视频事件
$('.intro-brazil-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_brazil', 'click', '0']);
});
$('.intro-japan-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_japan', 'click', '0']);
});
$('.intro-balidao-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_balidao', 'click', '0']);
});

$(document).ready(function(){
  //页面跳转
  $(".next-btn").on('click',function(){
    window.location.href="next";
  });
  $('.return-index-btn').on('click',function () {
    window.location.href="index";
  })
  $('.subway-btn').on('click',function () {
    window.location.href="subway";
  })
  // 达人介绍
  $('.daren-wang-btn').on('click',function () {
    var indexHeight = $('.container').height();
    $('.mengban').height(indexHeight);
    $('.mengban').show();
    $('.intro-wang').show();
  })
  $('.daren-tang-btn').on('click',function () {
    var indexHeight = $('.container').height();
    $('.mengban').height(indexHeight);
    $('.mengban').show();
    $('.intro-tang').show();
  })
  $('.daren-pang-btn').on('click',function () {
    var indexHeight = $('.container').height();
    $('.mengban').height(indexHeight);
    $('.mengban').show();
    $('.intro-pang').show();
  })
  $('.daren-ku-btn').on('click',function () {
    var indexHeight = $('.container').height();
    $('.mengban').height(indexHeight);
    $('.mengban').show();
    $('.intro-ku').show();
  })
  $('.mengban').on('click',function () {
    $('.daren-intro').hide();
    $('.mengban').hide();
  })
  // 报名
  $('.sign-btn').on('click',function () {
    window.location.href="sign"
  })
  //播放视频
  $('.intro-brazil-btn').on('click',function () {
    var brazil = document.getElementById('brazil-play');
    brazil.play();
  })
  $('.intro-japan-btn').on('click',function () {
    var japan = document.getElementById('japan-play');
    japan.play();
  })
  $('.intro-balidao-btn').on('click',function () {
    var balidao = document.getElementById('balidao-play');
    balidao.play();
  })
});
