const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&units=metric&appid=${apiKey}`; // Replace YOUR_CITY with the desired city

// Fetch weather data from API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const city = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        document.getElementById('city').innerText = city;
        document.getElementById('temperature').innerText = temperature;
        document.getElementById('description').innerText = description;
    })
    .catch(error => console.log('Error fetching weather data:', error));
