async function searchCity(event) {
    event.preventDefault();

    const city = $('input[name="search-city"]').val();
    if (city === "") return;

    try {
        
       await fetchAndUpdateWeather(city);
        
        localStorage.setItem("city", city);
        searchHistory.add(city);
        if (searchHistory.size >= 10) {
            searchHistory = new Set([...searchHistory].slice(1));
        }
        localStorage.setItem("searchHistory", JSON.stringify([...searchHistory]));
        displaySearchHistory();
    } catch(err) {
        console.log(err);
    }
}

function displaySearchHistory() {
    $("#search-history").html("");
    const size = searchHistory.size;
    if (size === 0) {
        $("#search-history").html("No search history at this time...");
    } else {
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
