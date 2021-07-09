// Used for organizing weather information
class WeatherData {
    constructor(temp, current, date, iconData) {
        this.temp = temp;
        this.wind = current.wind_speed;
        this.humidity = current.humidity;
        this.uvi = current.uvi;
        this.date = this.formatDate(date);
        this.icon = `${iconData.icon}.png`;
        this.iconDescription = iconData.description;
    }

    formatDate(date) {
        if (date instanceof moment) {
            return date.format(DATE_FORMAT);
        } else {
            return moment(date).format(DATE_FORMAT);
        }
    }
}