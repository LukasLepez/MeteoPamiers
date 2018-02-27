moment.locale('fr');
$("#date").text(moment().format("DD MMMM YYYY"));

$(document).ready(function() {
    $("#valider").click(function() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + $("#ville").val() + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25")
            .then(res => res.json())
            .then(resJson => $('#temperature').text(resJson.main.temp + "°"));

        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + $("#ville").val() + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25")
            .then(res => res.json())
            .then(resJson => $('#tempMax').text("Temp. max : " + resJson.main.temp_max + "°"));
    
    	fetch("http://api.openweathermap.org/data/2.5/weather?q=" + $("#ville").val() + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25")
            .then(res => res.json())
            .then(resJson => $('#tempMin').text("Temp. max : " + resJson.main.temp_min + "°"));
    
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + $("#ville").val() + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25")
            .then(res => res.json())
            .then(resJson => $('#presAtmo').text("Pres. atmosphérique : " + resJson.main.pressure));
    
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + $("#ville").val() + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25")
            .then(res => res.json())
            .then(resJson => $('#vitesseVent').text("Vitesse du vent : " + resJson.wind.speed + "km/h"));

        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + $("#ville").val() + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25")
            .then(res => res.json())
            .then(resJson => $('#humidite').text("Humidité : " + resJson.main.humidity + "%"));

        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + $("#ville").val() + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25")
            .then(res => res.json())
            .then(resJson => $('#longitude').text("Longitude : " + resJson.coord.lon));

        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + $("#ville").val() + "&units=metric&lang=fr&appid=ed328c793060247cdac872897948ba25")
            .then(res => res.json())
            .then(resJson => $('#latitude').text("Latitude : " + resJson.coord.lat));
    });
});