/*
The script is from official Google API Docs that I edited according to what I needed for my project.
https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
*/

var map;
var places;
var infoWindow;
var autocomplete;
var customIcon;
var markers = [];
var drawingManager;
var MARKER_PATH = "https://developers.google.com/maps/documentation/javascript/images/marker_green";
var hostnameRegexp = new RegExp("^https?://.+?/");


//Initial map shown on the webpage
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 34.881857, lng: 32.477719 },
        zoom: 3,
        mapTypeId: "roadmap"
    });

    //Create the autocomplete object and associate it with the UI input control.
    //Restrict the search to the default country, and to place type "cities".
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (
            document.getElementById("place-input")), {
            types: ["(cities)"]
        });
    places = new google.maps.places.PlacesService(map);

    autocomplete.addListener("place_changed", onPlaceChanged);
    
    //Info window for map markers
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById("info-content")
    });
    
    //Drawing Controls
    var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
        },
        markerOptions: { icon: './assets/images/icons/navigation-icon.png' },
        circleOptions: {
            fillColor: 'rgba(240, 127, 127, 0.7)',
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1
        }
    });
    drawingManager.setMap(map);
}

//When the user selects a city, get the place details for the city and
//zoom the map in on the city.
function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (place.geometry) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
        search();
    }
}

//Search for hotels, bars, restaurants, stores, museums in the selected city,
//within the viewport of the map.
function search() {

    var typeSelected = document.getElementById("typeSelect").value;

    var search = {
        bounds: map.getBounds(),
        types: [typeSelected]
    };

    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            //Create a marker for each hotel, bar, etc found and
            //assign a letter of the alphabet to each marker icon.
            for (var i = 0; i < results.length; i++) {
                if (typeSelected == "lodging") {
                    customIcon = "./assets/images/icons/accommodation-icon.png";
                }
                else if (typeSelected == "museum") {
                    customIcon = "./assets/images/icons/attractions-icon.png";
                }
                else if (typeSelected == "bar") {
                    customIcon = "./assets/images/icons/bar-icon.png";
                }
                else if (typeSelected == "restaurant") {
                    customIcon = "./assets/images/icons/restaurant-icon.png";
                }
                else if (typeSelected == "store") {
                    customIcon = "./assets/images/icons/store-icon.png";
                }
                else if (typeSelected == "transit_station") {
                    customIcon = "./assets/images/icons/transportation-icon.png";
                }
                //Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: {
                        url: customIcon
                    }
                });

                //If the user clicks a hotel, bar etc. marker, show the details
                //of that in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
        else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
            clearResults();
            clearMarkers();

            //Message if there are no markers to show hotel, bars, etc.
            document.getElementById("results").innerHTML = "Sorry! No result was found for this request.";
            $('#noResultModal').modal('show');
        }
    });
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

function dropMarker(i) {
    return function() {
        markers[i].setMap(map);
    };
}

function addResult(result, i) {
    var results = document.getElementById("results");
    var markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
    var markerIcon = MARKER_PATH + markerLetter + ".png";

    var tr = document.createElement("tr");
    tr.style.backgroundColor = (i % 2 === 0 ? "#00ff8e" : "#ffffff");
    tr.onclick = function() {
        google.maps.event.trigger(markers[i], "click");
    };

    var iconTd = document.createElement("td");
    var nameTd = document.createElement("td");
    var icon = document.createElement("img");
    icon.src = markerIcon;
    icon.setAttribute("class", "placeIcon");
    icon.setAttribute("className", "placeIcon");
    var name = document.createTextNode(result.name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    results.appendChild(tr);
}

function clearResults() {
    var results = document.getElementById("results");
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

//Get the place details for hotels, bars, etc. Show the information in an info window,
//anchored on the marker for the hotel or bar that the user selected.
function showInfoWindow() {
    var marker = this;

    //Set bounce animation to marker
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    }
    else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }

    //Shows marker information
    places.getDetails({ placeId: marker.placeResult.place_id },
        function(place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            buildIWContent(place);
        });
}

//Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
    document.getElementById("iw-icon").innerHTML = '<img class="infoIcon" ' +
        'src="' + place.icon + '"/>';
    document.getElementById('iw-url').innerHTML = '<b><a target="_blank" href="' + place.url +
        '">' + place.name + '</a></b>';
    document.getElementById("iw-address").textContent = place.vicinity;

    if (place.formatted_phone_number) {
        document.getElementById("iw-phone-row").style.display = "";
        document.getElementById("iw-phone").textContent =
            place.formatted_phone_number;
    }
    else {
        document.getElementById("iw-phone-row").style.display = "none";
    }

    //Assign a five-star rating to the hotel, using a black star ('&#10029;')
    //to indicate the rating the hotel has earned, and a white star ('&#10025;')
    //for the rating points not achieved.
    if (place.rating) {
        var ratingHtml = '';
        for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
                ratingHtml += '&#10025;';
            }
            else {
                ratingHtml += '&#10029;';
            }
            document.getElementById("iw-rating-row").style.display = '';
            document.getElementById("iw-rating").innerHTML = ratingHtml;
        }
    }
    else {
        document.getElementById("iw-rating-row").style.display = "none";
    }

    //The regexp isolates the first part of the URL (domain plus subdomain)
    //to give a short URL for displaying in the info window.
    if (place.website) {
        var fullUrl = place.website;
        var website = hostnameRegexp.exec(place.website);
        if (website === null) {
            website = 'http://' + place.website + '/';
            fullUrl = website;
        }
        document.getElementById("iw-website-row").style.display = '';
        document.getElementById("iw-website").textContent = website;
    }
    else {
        document.getElementById("iw-website-row").style.display = "none";
    }
}
