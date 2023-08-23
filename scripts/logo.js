var header = document.querySelector('div#header-logo');
document.addEventListener('wheel', function () {
    if (window.scrollY > 0) {
        header.className = 'small';
    } else {
        header.className = '';
    }
});
