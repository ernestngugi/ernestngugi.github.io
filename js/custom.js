//-----------SCROLL------------//
$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('.navbar');
    var offset = startchange.offset();
    if(startchange.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top){
                $('.navbar').addClass('scroll');
            }else{
                $('.navbar').removeClass('scroll');
            }
        })
    }
});

 //----------PRELOADER---------//
$(window).load(function(){
    $('.loader').fadeOut("slow");
});
//----------HERO--------------//
$(function(){
    function abso(){
        $('#head').css({
            position:'relative',width:$(window).width(),height:$(window).height()
        });
    }
    $(window).resize(function(){
        abso();
    });
    abso();
});

//---------TYPING-------------//
$(function(){
    $("#typed").typed({
        strings: ["Front-End Developer.^1000","Android Developer.^1000","Web Developer.^1000"],
        typeSpeed: 0,
          startDelay: 2,
          contentType: 'text',
          loop: true
    });
    
    // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.3);
  }
    initParallax();
    
    // ------- WOW ANIMATED ------ //
 new WOW().init();
});