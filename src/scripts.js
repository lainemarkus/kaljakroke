document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('App-header a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});