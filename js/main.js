// Sticky menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#main-nav').style.opacity = 0.8;
    } else {
        document.querySelector('#main-nav').style.opacity = 1;
    }
});

$('#main-nav a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, feature').animate({
                scrollTop: $(hash).offset().top - 80
            },
            800
        );
    }
});


