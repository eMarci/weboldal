var header = document.querySelector('header');
document.addEventListener('wheel', function () {
    if (window.scrollY > 0) {
        header.className = 'small';
    } else {
        header.className = '';
    }
});
