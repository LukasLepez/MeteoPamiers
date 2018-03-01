moment.locale('fr');
$("#date").text(moment().format("DD MMMM YYYY"));

$('#valider').click(function() {
	var ville = $("#ville").val();
    $.ajax({
        type: 'GET',
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25",
        success: function(res) {
            $('#temperature').text(res.main.temp + "°");
            $('#tempMax').text("Temp. max : " + res.main.temp_max + "°");
            $('#tempMin').text("Temp. min : " + res.main.temp_min + "°");
            $('#presAtmo').text("Pres. atmosphérique : " + res.main.pressure);
            $('#vitesseVent').text("Vitesse du vent : " + res.wind.speed + " km/h");
            $('#humidite').text("Humidité : " + res.main.humidity + "%");
            $('#longitude').text("Longitude : " + res.coord.lon);
            $('#latitude').text("Latitude : " + res.coord.lat);
            // Modifie la latitude et la longitude en fonction de la variable urlVille
            // Actualise la carte avec les nouvelles modifications
            $('#divMap').html("<iframe id='map'src='https://www.google.com/maps/embed/v1/view?key=AIzaSyCBdOfwbLBMGhe9K77dPqD0x849yNQim3E&center=" + res.coord.lat + "," + res.coord.lon + "&zoom=11&maptype=satellite'></iframe>");
        }
    });
});