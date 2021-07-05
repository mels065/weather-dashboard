async function searchCity(event) {
    event.preventDefault();

    const city = $('input[name="search-city"]').val();
    if (city === "") return;

    try {
        
       await fetchAndUpdateWeather(city);
        
        localStorage.setItem("city", city);
        searchHistory.add(city);
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
        const ul = $("<ul></ul>")
        for (let i = searchHistory.size - 1; i >= 0; i--) {
            const btn = $(`<button class="search">${[...searchHistory][i]}</button>`);
            console.log(btn.html());
            ul.append(btn);
        }
        $("#search-history").append(ul);
    }
}
