$(document).ready(function() {
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});

$(document).ready(function() {

    $(".hamburger").click(function() {
           $(".main-menu").slideToggle("slow", function() {
            $(".main-menu").show();
            $(".close-menu").show();
            $(".hamburger").hide();
        });
    });

    $(".close-menu").click(function() {
        $(".main-menu").slideToggle("slow", function() {
            $(".main-menu").hide();
            $(".close-menu").hide();
            $(".hamburger").show();
        });
    });
   
  
});

$( document ).ready(function() {

$('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<span class="prevArrow"><i class="fa fa-arrow-left"></span>',
  nextArrow: '<span class="nextArrow"><i class="fa fa-arrow-right"></span>',
  autoplay:false,
  arrows:true,
  dots:false,
  pauseOnHover:false,
  infinite: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    
    }
  ]
});

});
