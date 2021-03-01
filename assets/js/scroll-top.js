$(document).ready(function(){

  $("#scroll-top").hide();

  $('#scroll-top').click(function () {
        $('body,html').animate({
           scrollTop: 0
        }, 800);
        return false;
  });

  $(window).scroll(function () {
     if ($(this).scrollTop() > 450) {
        $('#scroll-top').fadeIn();
     } else {
        $('#scroll-top').fadeOut();
     }
  });
});