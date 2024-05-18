const apiKey = '4b65118d66b3ec37508013988be46848';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
         document.querySelector(".error").style.display = "block";
         document.querySelector(".weather").style.display = "none";
        // alert("Invalid city name")
    }
    else {
        let data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Humidity"){
            weatherIcon.src = "images/humidity.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Thunderstorm"){
            weatherIcon.src = "images/thunderstorm.png";
        };
    
        document.querySelector(".error").style.display = "none";
         document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keydown", (event) => {
    // Check if the key pressed is Enter
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
