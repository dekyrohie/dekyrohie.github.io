$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// MODAL START
$('#galleryModal').on('show.bs.modal', function (e) {
    $('#galleryImage').attr("src",$(e.relatedTarget).data("large-src"));
 });

//  SCROLL
var scroll = new SmoothScroll('a[href*="#_"]');