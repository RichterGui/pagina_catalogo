function ativaScroll(selector){
$(selector).click(function(event){
    event.preventDefault();
    let target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).offset().top
    },1000 )
})
}

ativaScroll('a[href*=nav-about]');
ativaScroll('a[href*=nav-products]');
ativaScroll('a[href*=nav-contact]');


