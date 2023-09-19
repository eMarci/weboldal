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
    try {
        let x = JSON.parse(document.cookie).style;
        return x;
    } catch (error) {
        return false;
    }
}

// function init() {
//     let style = document.createElement('link');
//     style.id = 'style';
//     style.setAttribute('rel', 'stylesheet');
//     let dark = readCookie('style');
//     if (dark) {
//         style.setAttribute('href', 'css/dark.css');
//     } else {
//         style.setAttribute('href', 'css/light.css');
//     }
//     document.head.appendChild(style);
//     return dark;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let dark = init();
//     let ts = document.getElementById('themeSwitch');
//     ts.checked = dark;
//     ts.onchange = function () {
//         if (ts.checked) {
//             console.log('checked');
//             setDark();
//         } else {
//             console.log('unchecked');
//             setLight();
//         }
//     }
// });

// document.onreadystatechange = (e) => {
//     switch (document.readyState) {
//         case 'interactive': {
//             let style = document.createElement('link');
//             style.id = 'style';
//             style.setAttribute('rel', 'stylesheet');
//             let dark = readCookie('style');
//             if (dark) {
//                 style.setAttribute('href', 'css/dark.css');
//             } else {
//                 style.setAttribute('href', 'css/light.css');
//             }
//             document.head.appendChild(style);
//             let sw = document.getElementById('themeSwitch');
//             sw.checked = dark;
//             sw.onchange = swap;
//             break;
//         }
//     }
// }

// window.onunload = () => {
//     createCookie("style", isDark());
// };

function swap() {
    if (document.getElementById('themeSwitch').checked) {
        document.getElementById('style').setAttribute('href', 'css/dark.css');
    } else {
        document.getElementById('style').setAttribute('href', 'css/light.css');
    }
}

document.onload = () => {
    console.log('loaded');
    document.getElementById('themeSwitch').onchange = () => {
        console.log('xs');
        swap();
    };
};