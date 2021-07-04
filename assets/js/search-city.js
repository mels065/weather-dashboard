async function searchCity(event) {
    event.preventDefault();

    const city = $('input[name="search-city"]').val();
    if (city === "") return;

    try {
        
       await fetchAndUpdateWeather(city);
        
        localStorage.setItem("city", city);
        searchHistory.add(city);
        localStorage.setItem("searchHistory", JSON.stringify([...searchHistory]));
    } catch(err) {
        console.log(err);
    }
}

$("#search-city-form").submit(searchCity);
