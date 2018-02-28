moment.locale('fr');
$("#date").text(moment().format("DD MMMM YYYY"));

var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(43.11, 1.61),
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

$(document).ready(function() {
    $("#valider").click(function() {
        var ville = $("#ville").val();
        var urlVille = "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25";

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => {
                $('#temperature').text(resJson.main.temp + "°"),
                    $('#tempMax').text("Temp. max : " + resJson.main.temp_max + "°"),
                    $('#tempMin').text("Temp. min : " + resJson.main.temp_min + "°"),
                    $('#presAtmo').text("Pres. atmosphérique : " + resJson.main.pressure),
                    $('#vitesseVent').text("Vitesse du vent : " + resJson.wind.speed + " km/h"),
                    $('#humidite').text("Humidité : " + resJson.main.humidity + "%"),
                    $('#longitude').text("Longitude : " + resJson.coord.lon),
                    $('#latitude').text("Latitude : " + resJson.coord.lat),
                    // Modifie la latitude et la longitude en fonction de la variable urlVille
                    mapOptions = {
                        zoom: 11,
                        center: new google.maps.LatLng(resJson.coord.lat, resJson.coord.lon),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    },
                    // Actualise la carte avec les nouvelles modifications
                    map = new google.maps.Map(document.getElementById('map'), mapOptions);
            });
    });
});