const apiKey = "22a132e549e553bc2c346a181276e463"; 
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

searchBtn.addEventListener('click', () => {
    const cityName = cityInput.value.trim();
    if (cityName === "") {
        weatherResult.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const condition = data.weather[0].description;

            weatherResult.innerHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temp} °C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Condition: ${condition}</p>`;
        })
        .catch(error => {
            weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
