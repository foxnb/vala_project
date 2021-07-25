let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 55.549928, lng: 37.569171 },
        zoom: 17,
    });



    var marker = new google.maps.Marker({


        position: { lat: 55.549928, lng: 37.569171 },

        map: map,

        title: 'Лавка вкусной еды'
    });
}



