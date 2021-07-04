class WeatherData {
    constructor(temp, current, date) {
        this.temp = temp;
        this.wind = current.wind_speed;
        this.humidity = current.humidity;
        this.uvi = current.uvi;
        this.date = this.formatDate(date);
    }

    formatDate(date) {
        if (date instanceof moment) {
            return date.format(DATE_FORMAT);
        } else {
            return moment(date).format(DATE_FORMAT);
        }
    }
}