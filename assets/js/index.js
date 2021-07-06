let searchHistory;

(async () => {
    let city = localStorage.getItem("city");
    if (city === null) city = "New York, NY";
        
    searchHistory = new Set(
        JSON.parse(localStorage.getItem("searchHistory"))
    );

    fetchAndUpdateWeather(city);
    displaySearchHistory();

    $("#search-city-form").submit(searchCity);
})();
