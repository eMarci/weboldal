document.addEventListener('scroll', () => {
    // console.log('hello');
    if (window.scrollY > 0) {
        document.querySelector('header').setAttribute('id', 'shrunk');
    } else {
        document.querySelector('header').removeAttribute('id');
    }
});