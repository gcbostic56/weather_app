{
    const apikey = "e2b301a89b932faba83be574a9338fcd"
    const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    
    const weather = {
        fetchGetWeather: function (zip) {
            let apikey = "e2b301a89b932faba83be574a9338fcd",
            fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=imperial&appid=" + this.apikey)
            .then((response) => response.json())
            // .then((info) => this.showWeather(info));
        },
        showWeather: function (info) {
            const { name } = info;
            const { icon, description } = info.weather[0];
            const { temp, temp_min, temp_max, feels_like, humidity } = info.main;
            console.log(name, icon, description, temp, temp_min, temp_max, feels_like, humidity)
                document.querySelector(".city").innerText = name;
                document.querySelector(".date").innerText = date;
                document.querySelector(".currentTemp").innerText = Math.round(temp) + "°";
                document.querySelector(".conditionIcons").src = 'http://openweathermap.org/img/wn/' + icon + '.png';
                document.querySelector(".info").innerText = description;
                document.querySelector(".tempHi").innerText = "Today's High: " + Math.round(temp_max) + "°";
                document.querySelector(".tempLo").innerText = "Today's Low: " + Math.round(temp_min) + "°";
                document.querySelector(".feels_like").innerText = "Feels like: " + Math.round(feels_like) + "°";
                document.querySelector(".humidity").innerText = "Humidity: " + Math.round(humidity) + "%";
                document.body.style.backgroundImage = "url('https://source.unsplash.com/random/2000×2000/?," + description + " )";
                
        },
        zipSearch: function () {
            this.fetchGetWeather(document.querySelector("#submission").value);
        },
    };
    
    document.querySelector("#go").addEventListener("click", function() {
        if (document.querySelector("#submission").value === "") {
            weather.fetchGetWeather("28209")
        } else {
     weather.zipSearch()
        }
    })
    
    
    weather.fetchGetWeather("28209")
    
    document.querySelector(".fdegrees").addEventListener("click", function () {
     weather.zipSearchMetric()
    }
        
    )
    }