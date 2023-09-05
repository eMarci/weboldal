function load(content) {
    const cards = document.getElementById('cards');
    var data = JSON.parse(content);
    var events = data.events.data;
    var event_count = events.length;
    if (event_count == 0) {
        document.getElementById('no-events').removeAttribute('style');
        return null;
    }
    document.getElementById('no-events').setAttribute('style', 'display: none;');
    var html = "";
    for (let i = 0; i < 3; i++) {
        var client = new XMLHttpRequest();
        client.open('GET', events[0].cover.source);
        client.responseType = "blob";
        client.onload = function () {
            var image = URL.createObjectURL(client.response);
            html += `<div>
    <a href="" class="vertical event-card">
        <img src="${image}" alt="">
        <h3>${events[0].name}</h3>
        <p>
            ${events[0].description}
        </p>
        <p>
            <strong>Helyszín:</strong> ${events[0].place.name}
        </p>
        <p>
            <strong>Időpont:</strong> ${events[0].start_time}
        </p>
    </a>
</div>`;
            cards.setHTML(html);
        }
        client.send();
    }
}

function main() {
    var client = new XMLHttpRequest();
    client.open('GET', '../events.json');
    client.onload = function () {
        var content = client.responseText;
        load(content);
    }
    client.onerror = function () {
        document.getElementById('no-events').setAttribute('style', 'display: none;');
    }
    client.send();
}

document.addEventListener("DOMContentLoaded", () => {
    main();
});