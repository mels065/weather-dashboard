class WeatherData {
    constructor(city, temp, current) {
        this.city = city;
        this.temp = temp;
        this.wind = current.wind_speed;
        this.humidity = current.humidity;
        this.uvi = current.uvi;
    }
}