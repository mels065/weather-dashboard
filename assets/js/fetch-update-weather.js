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
        console.log(data2);

        const currentWeather = new WeatherData(
            data2.current.temp,
            data2.current,
            moment(),
        );

        const fiveDayForecast = [];
        for (let i = 0; i < 5; i++) {
            const daily = data2.daily;
            let date = moment();
            date = date.date(date.date() + i + 1);
            fiveDayForecast.push(
                new WeatherData(
                    daily[i].temp.day,
                    daily,
                    date
                )
            );
        }
    } catch(err) {
        throw err;
    }
}
