$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Dublin&units=metric&appid=2fa012fec825afa1f975d94bb9232b3f", function(data) {
    console.log(data);

    var weatherIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather = data.weather[0].main;
    var temperature = Math.round(data.main.temp) + "&#8451;";

    $('.weather-icon').attr("src", weatherIcon);
    $('.weather').append(weather);
    $('.temperature').append(temperature);
});
