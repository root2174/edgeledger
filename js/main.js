var map;

function initMap() {

    const loc = { lat: 42.361145, lng: -71.057083};

    map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
    });

    const marker = new google.maps.Maker({position: loc, map: map})
}