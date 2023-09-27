const apiKey = 'fb75a1bd367fd93678d17f7e2c04487c'; 
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperatureC').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('temperatureF').textContent = `In Fahrenheit: ${data.main.temp *9/5+32}F`;
            document.getElementById('temperatureK').textContent = `In Kelvin :  ${data.main.temp +273.15}K`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('Wind').textContent = `Wind-Speed: ${data.wind.speed}M/S`;
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
function fetchWeather(){
    const apiKey = 'fb75a1bd367fd93678d17f7e2c04487c'; 

    navigator.geolocation.getCurrentPosition(async(position)=>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const URl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        try{
            const response = await fetch(URl);
        const data1 = await response.json();

        document.getElementById('weatherInfo').innerHTML = 
           `<h2>Current Weather</h2>
           <p>Location: ${data1.name}</>
           <p>Temperature: ${data1.main.temp - 273 }°C</p>
           <p>In Kelvin: ${data1.main.temp}K</p>
           <p>In Fahrenhit: ${(data1.main.temp - 273)*9/5+32}F</p>
           <p>Humidity: ${data1.main.humidity}%</p>
           <p>Wind-Speed: ${data1.wind.speed}M/S</p>
           `;
        }
    
        catch(error){
            console.error('error',error);
        }
    });
}
document.getElementById('Current-weather').addEventListener('click',fetchWeather);


   