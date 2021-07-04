// APIs
const GEOCODING_API_KEY = "pk.eyJ1IjoibWVsbHVzYnJhbmRvbiIsImEiOiJja3FuMWxqa3owNnZzMm9xbGFieXc0c2JrIn0.-WyLtzIZj-ZBh3V2s6yGyA";
const GEOCODING_API_ENDPOINT = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const GEOCODING_PARAMS = `.json?types=place&access_token=${GEOCODING_API_KEY}`

const WEATHER_API_KEY = "f589dad99d08903972387439baab0191";
const WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?appid=${WEATHER_API_KEY}&units=imperial`;


// Date formats
const DATE_FORMAT = "M/D/YYYY";
