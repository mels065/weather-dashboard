let searchHistory;

(async () => {
    let city = localStorage.getItem("city");
    if (city === null) city = "New York, NY";
        
    searchHistory = new Set(
        JSON.parse(localStorage.getItem("searchHistory"))
    );

    await fetchAndUpdateWeather(city);
    displaySearchHistory();

    $("#search-city-form").submit(searchCity);

    setInterval(() => {
        fetchAndUpdateWeather(city);
        displaySearchHistory();
    }, 1000 * 60 * 5)
})();
