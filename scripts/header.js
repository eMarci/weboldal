document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.querySelector('header').setAttribute('id', 'kicsi');
    } else {
        document.querySelector('header').removeAttribute('id');
    }
});