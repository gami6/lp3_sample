$(window).load(function() {
// 画面内アンカースクロール
var offsetY = 0;
var time = 500;
  $('a[href^="#"]').click(function() {
    var target = $(this.hash);
    if (!target.length) return ;
    var targetY = target.offset().top+offsetY;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    window.history.pushState(null, null, this.hash);
    return false;
  });
});