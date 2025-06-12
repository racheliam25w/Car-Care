function initMap() {
    // Initialize map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: -34.397, lng: 150.644 } // Default center
    });

    // Extract query parameters
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var address = urlParams.get('address');
    var city = urlParams.get('city');
    var garageName = urlParams.get('garageName');
    var phone = urlParams.get('phone');
    var hours = urlParams.get('hours');

    // Update details
    document.getElementById('city').innerText += city;
    document.getElementById('garageName').innerText += garageName;
    document.getElementById('address').innerText += address;
    document.getElementById('phone').innerText += phone;
    document.getElementById('hours').innerText += hours;

    // Geocode address and update map
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}