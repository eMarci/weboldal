function load(content) {
    const cards = document.getElementById('cards');
    var data = JSON.parse(content);
    var events = data.data;
    var event_count = events.length;
    if (event_count == 0) {
        document.getElementById('no-events').removeAttribute('style');
        return null;
    }
    document.getElementById('no-events').setAttribute('style', 'display: none;');
    var html = "";
    for (let i = 0; i < event_count; i++) {
        var client = new XMLHttpRequest();
        client.open('GET', events[i].cover.source);
        client.responseType = "blob";
        client.onload = function () {
            var image = URL.createObjectURL(client.response);
            html += `<div>
    <a href="" class="vertical event-card">
        <img src="${image}" alt="">
        <h3>${events[i].name}</h3>
        <p>
            ${events[i].description}
        </p>
        <p>
            <strong>Helyszín:</strong> ${events[i].place.name}
        </p>
        <p>
            <strong>Időpont:</strong> ${events[i].start_time}
        </p>
    </a>
</div>`;
            cards.setHTML(html);
        }
        client.send();
    }
}

function main() {
    var key = "EAAVGbiFIyVMBO4qGWeSZBvZAATIsngfwOlri3iW9GrDOxXaY2xb8F7AzEI1ynXVGKDpuZCcAuGBXDtQ9RscS79reyjXNHDflM1Ytdmt8yqb1qzFrvQ4kXvpAZAZAKrnncZC9oQinu66SVKhSZBizjE1jlxEhSAhycoVQthJNuA789wrTfREZAnteE0ILwdIMwZCUsZCgc34aM5U2j6lUgZD";
    var client = new XMLHttpRequest();
    client.open('GET', 'https://graph.facebook.com/112998758567158/events?fields=name,description,place,start_time,attending_count,cover&access_token=' + key);
    client.onload = function () {
        var content = client.responseText;
        console.log(content);
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