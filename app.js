function getWeather() {
  const location = document.getElementById('locationInput').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=72cfc55558f4a40c2e93f96b70748ea6&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherData = document.getElementById('weatherData');
      if (data.cod === '404') {
        weatherData.innerHTML = "<p>Location not found. Please try again.</p>";
      } else {
        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Description: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        weatherData.innerHTML = weatherInfo;
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      const weatherData = document.getElementById('weatherData');
      weatherData.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    });
}
