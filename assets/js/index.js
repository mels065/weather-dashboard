const city = localStorage.getItem("city");
const searchHistory = new Set(
    JSON.parse(localStorage.getItem("searchHistory"))
);

fetchAndUpdateWeather(city);
displaySearchHistory();

$("#search-city-form").submit(searchCity);
