// MODAL START
$('#galleryModal').on('show.bs.modal', function (e) {
    $('#galleryImage').attr("src",$(e.relatedTarget).data("large-src"));
 });

//  TRANSPARENT NAVBAR
 $(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});


$(function(){
    $(".typed").typed({
      strings: ["website.", "android app.", "iphone app.", "pc software.", "management software.", "online shop."],
      typeSpeed: 1,
      loop: true,
      backDelay: 1000
    });
});

  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop:  ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });