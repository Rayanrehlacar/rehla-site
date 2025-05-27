 $(document).ready(function(){
    $('.partner_owl').owlCarousel({
          loop:true,
          nav:false,
          dots:false,
          autoplay:true,
          autoplayTimeout:4000,
          smartSpeed:650,
          autoplayHoverPause:false,
           responsive:{
               0:{
                   items:2,
                   margin:20
               },
               768:{
                   items:3,
                   margin:30
               },
               1024:{
                   items:4,
                    margin:50
               },
               1200:{
                   items:4,
                    margin:80
               }
           }
    });
    $('.screen_owl').owlCarousel({
          loop:true,
          nav:false,
          dots:true,
          autoplay:true,
          center:true,
          autoplayTimeout:4000,
          smartSpeed:650,
          autoplayHoverPause:false,
           responsive:{
               0:{
                   items:2,
                   margin:20
               },
               768:{
                   items:3,
                   margin:26
               },
               1024:{
                   items:4,
                    margin:32
               },
               1200:{
                   items:5,
                    margin:38
               }
           }
    });
    $('.testimonial_owl').owlCarousel({
          loop:true,
          nav:true,
          dots:false,
          autoplay:true,
          center:true,
          autoplayTimeout:4000,
          smartSpeed:650,
          autoplayHoverPause:false,
           responsive:{
               0:{
                   items:1
              }
          }
    });

    $(".about_img > a").on("click",function(){
      var video = jQuery(this).attr("data-video");
          $(".modal video").attr("src",video);
          $(".modal").fadeIn(0);
          $(".overlay").fadeIn();
        });
          $(".overlay").on("click",function(){
            $(".modal video").attr("src","");
              $(".overlay").fadeOut();
              $(".modal").fadeOut(0);
        });

  $("input[type='tel']").keypress(function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            event.preventDefault();
        }
    });
    $("input[type='tel']").on('paste', function(e) {
        if (e.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
            e.preventDefault();
        }
    });$
    $('.tabs_links li a').on('click', function () {
        $('.tabs_links li a').removeClass("active");
        $(this).addClass("active");
        var tabdata = $(this).attr('data-tab');
        $('.gallery_box').fadeOut(0);
        $('div[data-tab="' + tabdata + '"]').fadeIn(0);
    });


  $(".toggle_btn svg").click(function(){
    $("header").toggleClass("show")
  })

  $(".accordion-item:first-child").find('.accordion-content').slideDown();
  $(".accordion-item:first-child").addClass('active');
 $('.accordion-header').click(function() {
        $('.accordion-content').slideUp();
        $(".accordion-item").removeClass("active");
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).parents(".accordion-item").addClass("active");
        }
    });
   $('.faq_topics li a').on('click', function () {
          $('.faq_topics li a').removeClass("active");
          $(this).addClass("active");
      var tab = $(this).attr('data-tab');
      $('.topic_details .accordion').fadeOut(0);
      $('div[data-details="' + tab + '"]').fadeIn(0);
      $(".accordion-item:first-child").find('.accordion-content').slideDown();
      $(".accordion-item:first-child").addClass('active');
    });

   $(".form_group .password_box span.show_password").click(function(){
      var input = $(this).prevAll("input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
      $(this).toggleClass('active');
    });
});