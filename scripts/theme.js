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

function swap(condition) {
    if (condition) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');
    }
}

document.onreadystatechange = () => {
    let ts = document.getElementById('themeSwitch');
    if (document.readyState === 'interactive') {
        document.body.setAttribute('loading', '');        
        let dark = readCookie()
        swap(dark);
        ts.checked = dark;
    } else if (document.readyState === 'complete') {
        document.body.removeAttribute('loading');
        document.body.style.visibility = "visible";
        ts.onchange = () => {
            swap(ts.checked);
        };
    }
};

window.onunload = () => {
    createCookie('style', document.getElementById('themeSwitch').checked);
};
