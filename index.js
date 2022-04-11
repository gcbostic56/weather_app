

const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})

const weather = {
    apikey: "1c5087f4009179a220e79cfce223c7ef",
    
    fetchGetWeather: function (zip) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=imperial&appid=" + this.apikey)
        .then((response) => response.json())
        .then((info) => this.showWeather(info));
        },
    fetchWeatherCelsius: function (zip) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=metric&appid=" + this.apikey)
        .then((response) => response.json())
        .then((info) => this.showWeather(info));
    },
    showWeather: function (info) {
                    // console.log(newinfo);
                    const { name } = info;
                    const { description, icon } = info.weather[0];
                    const { temp, feels_like, humidity, temp_max, temp_min} = info.main;
                    const { speed} = info.wind;
                    document.querySelector(".city").innerText = name;
                    document.querySelector(".date").innerText = date;
                    document.querySelector(".currentTemp").innerText = Math.round(temp) + "°";
                    document.querySelector(".conditionIcons").src = 'http://openweathermap.org/img/wn/' + icon + '.png';
                    document.querySelector(".info").innerText = description;
                    document.querySelector(".tempHi").innerText = "H:" + Math.round(temp_max) + "°";
                    document.querySelector(".tempLo").innerText = "L:" + Math.round(temp_min) + "°";
                    document.querySelector(".feels_like").innerText = "Feels like: " + Math.round(feels_like) + "°";
                    document.querySelector(".humidity").innerText = "Humidity: " + Math.round(humidity) + "%";
                    document.querySelector(".windSpeed").innerText = "Wind Speed: " + Math.round(speed) + "mph";
                    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/2000×2000/?," + description + " )";
    },
    zipSearch: function () {
        this.fetchGetWeather(document.querySelector("#submission").value);
    },
    zipSearchCelsius: function () {
        this.fetchWeatherCelsius(document.querySelector("#submission").value);
    }
}

document.querySelector("#go").addEventListener("click", function() {
    if (document.querySelector("#submission").value === "") {
        weather.fetchGetWeather("28209")
    } else {
 weather.zipSearch()
    }
})

weather.fetchGetWeather("28209")

document.querySelector(".check").addEventListener("click", function () {
    weather.zipSearchCelsius()
})


