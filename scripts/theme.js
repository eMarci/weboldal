function swap() {
    if (document.getElementById('themeSwitch').checked) {
        document.getElementById('style').setAttribute('href', 'css/index_dark.css')
    } else {
        document.getElementById('style').setAttribute('href', 'css/index.css')
    }
}