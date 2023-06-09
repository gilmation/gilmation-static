jQuery(document).ready(function($) {
  // Header & Back to top
  if($('#back-to-top').length > 0){
      var header_offset = 75;
      var bt_offset = 220;
      var duration = 500;
      $(window).scroll(function() {
          if ($(this).scrollTop() > bt_offset) {
              $('#back-to-top').fadeIn(duration);
          } else {
              $('#back-to-top').fadeOut(duration);
          }
          if ($(this).scrollTop() > header_offset) {
            $('header').addClass('narrow');
          }else{
            $('header').removeClass('narrow');
          }
      });

      $('#back-to-top').click(function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: 0}, duration);
          return false;
      });
  };
});

// Enquire
enquire.register("screen and (max-width:1023px)", {
  match : function() {
    if($('#main-wrapper').length == 0){
      // Build the horizontal slide menus layout
      var layout = $('<div id="main-wrapper"/>').append($('<div id="s-mask"/>').append($('<div id="mobile-nav" class="hidden-lg"/>')));
      $('body').append(layout);
      $('#holder').appendTo('#s-mask');
      // Build the responsive menu
      $('<div id="nav-back-link"><a href="#">Close</a></div>').appendTo('#mobile-nav');
      $('ul.pure-menu-list').first().clone().removeAttr('id').appendTo('#mobile-nav');
      $('ul', '#mobile-nav').addClass('node').removeClass('visible-lg');
      $('li', '#mobile-nav').addClass('item');
      $('li:not(:has(.node))', '#mobile-nav').addClass('last');
      $('>.node', '#mobile-nav').find('.node').each(function(){
          $(this).parents('.item').first().clone().removeClass('item').addClass('main last').find('.node').remove().end().prependTo($(this));
      });
      $('body').horizontalSlideMobileMenu();
    }
  },
  unmatch : function() {
  }
});
