
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

    var x = document.getElementsByClassName('brazil-play');
    function playVid() {
      console.log('hhh');
      x.play();
    }

  $('.intro-japan-btn').on('click',function () {
    $('.japan-play').play();
  })
  $('.intro-balidao-btn').on('click',function () {
    $('.balidao-play').play();
  })
});
