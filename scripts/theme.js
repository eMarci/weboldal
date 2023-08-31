function swap() {
    if (document.getElementById('themeSwitch').checked) {
        document.getElementById('style').setAttribute('href', 'css/dark.css')
    } else {
        document.getElementById('style').setAttribute('href', 'css/light.css')
    }
}