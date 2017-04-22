// jquery script disini....


$(document).ready(function() {



  $('.news_slide').owlCarousel({
  center: false,
  items:1,
  stagePadding:30,
  loop:false,
  nav:false,
  dots:false
  });

  $('.news_slide2').owlCarousel({
  center: false,
  items:4,
  loop:true,
  nav:false,
  dots:false,
    responsive : {
      // breakpoint from 0 up
      0 : {
            items:1
      },
      // breakpoint from 480 up
      480 : {
            items:1
      },
      // breakpoint from 768 up
      768 : {
            items:4
      }
    }
  });

  var owl = $('.news_slide2');
  owl.owlCarousel();
  // Go to the next item
  $('a.next').click(function() {
  owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('a.prev').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
  })

  $('.news_slide3').owlCarousel({
  center: false,
  items:5,
  loop:true,
  nav:false,
  dots:false,
    responsive : {
      // breakpoint from 0 up
      0 : {
            items:1
      },
      // breakpoint from 480 up
      480 : {
            items:1
      },
      // breakpoint from 768 up
      768 : {
            items:5
      }
    }
  });

  // var owl = $('.news_slide');
  // owl.owlCarousel();
  // // Go to the next item
  // $('a.next').click(function() {
  // owl.trigger('next.owl.carousel');
  // })
  // // Go to the previous item
  // $('a.prev').click(function() {
  // // With optional speed parameter
  // // Parameters has to be in square bracket '[]'
  // owl.trigger('prev.owl.carousel', [300]);
  // })

  $('#home-slideshow').owlCarousel({
  center: true,
  items:1,
  loop:false,
  nav:false,
  dots:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true
  });

    // $("#home-slideshow").owlCarousel({

    //   navigation : false, // Show next and prev buttons
    //   slideSpeed : 1000,
    //   paginationSpeed : 1000,
    //   singleItem:true,
    //   paginationNumbers:false,
    //   stopOnHover: true,
    //   autoPlay: 7000

    // });

    // $(document).ready(function() {
    //   var owl = $("#home-slideshow"); 
    //   // Custom Navigation Events
    //   $(".next").click(function(){
    //     owl.trigger('owl.next');
    //   })
    //   $(".prev").click(function(){
    //     owl.trigger('owl.prev');
    //   })
    //   $(".play").click(function(){
    //     owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    //   })
    //   $(".stop").click(function(){
    //     owl.trigger('owl.stop');
    //   })
    // });



   // Initialize popup as usual
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>Copyright 2016. All rights reserved.</small>';
      }
    }
  });


    // $(".btn_foh2").click(function(event){
    //     $('html, body').animate({scrollTop: '+=1000px'}, 500);
    // });

    $(".btn_foh2, .btn_sch").click(function() {
    $('html, body').animate({
        scrollTop: $("#demo_classform").offset().top
    }, 1200);
});


});


$('.btn_foh').click(function(){
  $(this).hide();
  $(this).siblings('a').children('.btn_foh2').fadeIn();
  $(this).siblings('a').children('.btn_foh3').fadeIn();
});

$('.sel_programs').change(function(){
  var idnow = $(this).find(':selected').data('inr');
   $('input[name="classprogram"]').val(idnow);

  if(idnow == ""){
  $('#sel_location').attr('disabled', 'true');
  $('#sel_location').addClass('i_sel');
  $("#sel_location option:first").attr("value", "");
  $("#sel_location option:first").text("waiting age ...");
  }else{
  $('#sel_location').removeAttr('disabled');
  $('#sel_location').removeClass('i_sel');
  $("#sel_location option:first").attr("value", "");
  $("#sel_location option:first").text("choose location");
  }
 

});


$('.btn_hammenu').click(function(){
  $('.bx_topmenumaster').fadeIn();
});
$('.mn_hide').click(function(){
  $('.bx_topmenumaster').fadeOut();
});


$('.sel_locschool').change(function(){
    var ido = $(this).find(':selected').val();
    var url = $(this).find(':selected').data('inr');

        window.location='?p='+ido;
});


$('.t_plan').click(function(){
  $('.p_plan').hide();
  if($(this).parent().children('.p_plan').hasClass('up')){
    $('.p_plan').removeClass('up');
     $('.bx_mgplan span').removeClass('glyphicon-minus').addClass('glyphicon-plus');
  }else{
    $('.p_plan').removeClass('up');
    $('.bx_mgplan span').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    $(this).parent().children('.p_plan').fadeIn().addClass('up');
    $(this).parent().children('.bx_mgplan').children('span').removeClass('glyphicon-plus').addClass('glyphicon-minus');
  }
  
  

});

