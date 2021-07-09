// Perform a search with the city string in the `search-city` input element
async function searchCity(event) {
    event.preventDefault();

    const city = $('input[name="search-city"]').val();
    if (city === "") return; // Prevent behavior if input is empty

    try {
        
       await fetchAndUpdateWeather(city);
        
       // Set city name to local storage
        localStorage.setItem("city", city);
        // Add city to search history
        searchHistory.add(city);
        // If more than 10 items are in search history, delete the oldest one
        if (searchHistory.size >= 10) {
            searchHistory = new Set([...searchHistory].slice(1));
        }
        // Save search history to local storage
        localStorage.setItem("searchHistory", JSON.stringify([...searchHistory]));
        displaySearchHistory();
    } catch(err) {
        console.log(err);
    }
}

// Display the buttons for each city in the search history
function displaySearchHistory() {
    $("#search-history").html(""); // Clear the search history display
    const size = searchHistory.size;
    // Display message if no search history
    if (size === 0) {
        $("#search-history").html("No search history at this time...");
    } else {
        // Display each city in search history
        const ul = $('<ul class="list-group"></ul>')
        for (let i = searchHistory.size - 1; i >= 0; i--) {
            const city = [...searchHistory][i];
            const btn = $(`<button class="search btn btn-light">${city}</button>`);
            btn.click(() => { fetchAndUpdateWeather(city) });
            ul.append(btn);
        }
        $("#search-history").append(ul);
    }
}
