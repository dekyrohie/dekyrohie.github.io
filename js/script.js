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