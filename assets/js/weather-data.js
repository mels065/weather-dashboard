class WeatherData {
    constructor(temp, current, date, icon) {
        this.temp = temp;
        this.wind = current.wind_speed;
        this.humidity = current.humidity;
        this.uvi = current.uvi;
        this.date = this.formatDate(date);
        this.icon = `${icon}.png`;
    }

    formatDate(date) {
        if (date instanceof moment) {
            return date.format(DATE_FORMAT);
        } else {
            return moment(date).format(DATE_FORMAT);
        }
    }
}