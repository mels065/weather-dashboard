// Used for list of search history
let searchHistory;

(async () => {
    // Get current name of city from
    // local storage
    let city = localStorage.getItem("city");
    // If there is no city set, then
    // set it to the default
    if (city === null) city = "New York, NY";
    
    // Get search history from local storage
    searchHistory = new Set(
        JSON.parse(localStorage.getItem("searchHistory"))
    );

    await fetchAndUpdateWeather(city);
    displaySearchHistory();

    $("#search-city-form").submit(searchCity);

    // Every 5 minutes, get current weather
    // and display it
    setInterval(() => {
        await fetchAndUpdateWeather(city);
    }, 1000 * 60 * 5)
})();
