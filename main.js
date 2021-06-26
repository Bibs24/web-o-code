$('.home-slider').owlCarousel({
    items:1,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    loop:true
});

$('.small-image img').click(function(){

    $(this).addClass('image-active').siblings().removeClass('image-active');
    let image = $(this).attr('src');
    $('.big-image img').attr('src', image);

});