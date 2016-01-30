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
    
    $('#instafeed').pongstgrm({
      accessId:     '1282855892',
      accessToken:  '1271812373.3e5c4aa.81e6712195f2462e9c933167433622a1'
    });
});

 //----------PRELOADER---------//
$(window).load(function(){
    $('.preloader').fadeOut("slow");
});

//--------COLLAPSE-----------//
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


//-------ACTIVE--------//
$(document).ready(function(){
    $('a[href="'+this.location.pathname+'"]').parent().addClass('active');
});

//----------HERO--------------//
$(function(){
    function abso(){
        $('#header').css({
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
        strings: ["weddings.^1000","events.^1000","birthdays.^1000","graduations.^1000"],
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
  wow = new WOW(
  {
    mobile: false
  });
  wow.init(); 
  Interdimensional.charge();  
    $('.tlt').textillate();
});