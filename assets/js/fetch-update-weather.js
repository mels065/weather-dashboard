async function fetchAndUpdateWeather(city) {
    try {
        const response1 = await fetch(
            `${GEOCODING_API_ENDPOINT}&address=${city}${GEOCODING_PARAMS}`
        );
        const data1 = await response1.json();
        const [lon, lat] = data1.features[0].center;
    
        const response2 = await fetch(
            `${WEATHER_API_ENDPOINT}&lat=${lat}&lon=${lon}`
        );
        const data2 = await response2.json();

        const currentWeather = new WeatherData(
            data2.current.temp,
            data2.current,
            moment(),
            data2.current.weather[0].icon
        );
        console.log(data2)

        displayCurrentWeather(city, currentWeather);
    } catch(err) {
        throw err;
    }
}

function displayCurrentWeather(city, currentWeather) {
    $("#weather-main-city-name").text(city);
    $("#weather-main-date").text(currentWeather.date);
    $("#weather-main-icon").attr("src", `${WEATHER_ICON}/${currentWeather.icon}`);
    $("#weather-main-temp").text(currentWeather.temp);
    $("#weather-main-wind").text(currentWeather.wind);
    $("#weather-main-humidity").text(currentWeather.humidity);
    $("#weather-main-uvi").text(currentWeather.uvi);
}
