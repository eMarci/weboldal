function setLight() {
    document.getElementById('style').setAttribute('href', 'css/light.css');
}

function setDark() {
    document.getElementById('style').setAttribute('href', 'css/dark.css');
}

function isDark() {
    return document.getElementById('themeSwitch').checked;
}

function createCookie(name, value) {
    document.cookie = `{"${name}":${value}}` + "; path=/";
}

function readCookie() {
    let x = JSON.parse(document.cookie).style;
    console.log(x);
    return x;
}

// function init() {
//     let dark = readCookie('style');
//     let sw = document.getElementById('themeSwitch');
//     sw.checked = dark;
//     if (dark) {
//         setDark();
//     } else {
//         setLight();
//     }
//     console.log(document.getElementById('style').getAttribute('href'));
//     sw.onchange = function () {
//         if (sw.checked) {
//             setDark();
//         } else {
//             setLight();
//         }
//     }
// }

function init() {
    let style = document.createElement('link');
    style.id = 'style';
    style.setAttribute('rel', 'stylesheet');
    let dark = readCookie('style');
    if (dark) {
        style.setAttribute('href', 'css/dark.css');
    } else {
        style.setAttribute('href', 'css/light.css');
    }
    document.head.appendChild(style);
    return dark;
}

window.onload = function () {
    // let dark = init();
    
};

window.onunload = function () {
    createCookie("style", isDark());
};

document.addEventListener('DOMContentLoaded', () => {
    let dark = init();
    let ts = document.getElementById('themeSwitch');
    ts.checked = dark;
    ts.onchange = function () {
        if (ts.checked) {
            console.log('checked');
            setDark();
        } else {
            setLight();
        }
    }
});