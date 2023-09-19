function readCookie() {
    try {
        let x = JSON.parse(document.cookie).style;
        return x;
    } catch (error) {
        return false;
    }
}

document.onreadystatechange = (e) => {
    console.log('in event');
    if (document.readyState === 'interactive') {
        console.log('interactive');
        let sheet = document.getElementById('style');
        let dark = readCookie();
        if (dark) {
            sheet.setAttribute('href', 'css/dark.css');
        } else {
            sheet.setAttribute('href', 'css/light.css');
        }
        let sw = document.getElementById('themeSwitch');
        sw.checked = dark;
        sw.onchange = (e) => {
            if (sw.checked) {
                sheet.setAttribute('href', 'css/dark.css');
            } else {
                sheet.setAttribute('href', 'css/light.css');
            }
        };
    }
};