async function searchCity(event) {
    event.preventDefault();

    const city = $('input[name="search-city"]').val();
    if (city === "") return;

    try {
        
        // Add function for fetching and displaying data here
        
        localStorage.setItem("city", city);
        searchHistory.push(city);
        localStorage.setItem("searchHistory", searchHistory);
    }
}

$("#search-city-form").submit(searchCity);
