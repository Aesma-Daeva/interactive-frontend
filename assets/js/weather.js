/*
When Show Weather button is clicked, it runs the Weather API.
This API is limited to 60 calls per minute on free subscription so I don't
want it to constantly run whenever the user searches for a place.
Documentation: https://openweathermap.org/current
*/
function getWeather() {

    //Gets value from input form search box
    var place = $("#place-input").val();

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=metric&appid=2fa012fec825afa1f975d94bb9232b3f", function displayWeather(data) {
        //I want to keep this so data always shows in devtools console
        console.log(data);

        //Weather Icon
        var weatherIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        //Weather Name
        var weather = data.weather[0].main;
        //Current Temperature in Celcius
        var temperature = Math.round(data.main.temp) + "&#8451;";

        //Data output

        $(".weatherIcon").attr("src", weatherIcon).fadeIn(2000);
        $(".weather").append(weather).fadeIn(2000);
        $(".temperature").append(temperature).fadeIn(2000);
    });

    $("#place-input").keypress(function clearWeatherOutput() {
        $("#weatherData").children().empty().fadeOut(2000);
    });
}
