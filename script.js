// navbar color
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});



// parallax effect
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.hero').css({
        'transform' : 'translate(0px, '+ wScroll/6 +'%)'
    })
    $('.img').css({
        'zoom': 1 + wScroll / 1000
    });

    // about
    if ( wScroll > $('.about').offset().top - 250) {
        $('.content-about').addClass('muncul');
    }

    // experience
    if ( wScroll > $('.experience').offset().top - 250) {
        $('.content-experience').addClass('muncul');
    }

    // projects
    if ( wScroll > $('.projects').offset().top - 250) {
        $('.content-projects').addClass('muncul');
    }

})