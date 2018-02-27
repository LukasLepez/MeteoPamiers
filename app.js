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
            .then(resJson => $('#temperature').text(resJson.main.temp + "°"));

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => $('#tempMax').text("Temp. max : " + resJson.main.temp_max + "°"));

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => $('#tempMin').text("Temp. max : " + resJson.main.temp_min + "°"));

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => $('#presAtmo').text("Pres. atmosphérique : " + resJson.main.pressure));

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => $('#vitesseVent').text("Vitesse du vent : " + resJson.wind.speed + " km/h"));

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => $('#humidite').text("Humidité : " + resJson.main.humidity + "%"));

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => $('#longitude').text("Longitude : " + resJson.coord.lon));

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => $('#latitude').text("Latitude : " + resJson.coord.lat));

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(resJson.coord.lat, resJson.coord.lon),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

        fetch(urlVille)
            .then(res => res.json())
            .then(resJson => map = new google.maps.Map(document.getElementById('map'), mapOptions));

    });
});