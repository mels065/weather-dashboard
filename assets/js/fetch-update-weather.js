// Fetch the weather data and display it
async function fetchAndUpdateWeather(city) {
    try {
        // Get the latitude and longitude from geocoding with city name
        const response1 = await fetch(
            `${GEOCODING_API_ENDPOINT}&address=${city}${GEOCODING_PARAMS}`
        );
        const data1 = await response1.json();
        const [lon, lat] = data1.features[0].center;
    
        // Get weather data at the specified latitude and longitude
        const response2 = await fetch(
            `${WEATHER_API_ENDPOINT}&lat=${lat}&lon=${lon}`
        );
        const data2 = await response2.json();

        // Assign current weather data
        const currentWeather = new WeatherData(
            data2.current.temp,
            data2.current,
            moment(),
            data2.current.weather[0]
        );
        // Assign weather data for next 5 days
        const fiveDayForecast = [];
        for (let i = 0; i < 5; i++) {
            let date = moment();
            date = date.date(date.date() + i + 1);
            fiveDayForecast.push(
                new WeatherData(
                    data2.daily[i].temp.day,
                    data2.daily[i],
                    date,
                    data2.daily[i].weather[0]
                )
            );
        }

        displayCurrentWeather(city, currentWeather);
        displayFiveDayForecast(fiveDayForecast);
    } catch(err) {
        throw err;
    }
}

// Display the current weather
function displayCurrentWeather(city, currentWeather) {
    $("#weather-main-city-name").text(city);
    $("#weather-main-date").text(currentWeather.date);
    $("#weather-main-icon").attr("src", `${getIconFile(currentWeather.icon)}`);
    $("#weather-main-icon").attr("alt", currentWeather.iconDescription);
    $("#weather-main-temp").text(currentWeather.temp);
    $("#weather-main-wind").text(currentWeather.wind);
    $("#weather-main-humidity").text(currentWeather.humidity);
    const uvi = currentWeather.uvi;
    const uviEl = $("#weather-main-uvi");
    uviEl.text(uvi);
    uviEl.removeClass(); // Remove all classes to prevent conflicts
    if (uvi < 3) uviEl.addClass("favorable");
    else if (uvi >= 3 && uvi < 8) uviEl.addClass("moderate");
    else uviEl.addClass("severe");
}

// Display the five day forecast
function displayFiveDayForecast(fiveDayForecast) {
    $("#five-day-forecast ul").html(""); // Clear the list of forecast items
    fiveDayForecast.forEach((weather) => {
        const el = $(
            `<li class="forecast-item">
                <div class="date">${weather.date}</div>
                <image class="icon" src=${getIconFile(weather.icon)} alt=${weather.description} />
                <div class="temp">Temp: ${weather.temp}&deg; F</div>
                <div class="wind">Wind: ${weather.wind} MPH</div>
                <div class="humidity">Humidity: ${weather.humidity}%</div>
            </li>`
        )
        $("#five-day-forecast ul").append(el);
    });
}

function getIconFile(icon) {
    return `${WEATHER_ICON}/${icon}`
}
