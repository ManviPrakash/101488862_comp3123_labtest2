import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  // Load API key from .env
  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  const searchWeather = async () => {
    try {
      // Fetch CURRENT weather
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        alert("City not found or API issue.");
        return;
      }

      setWeather(data);

      // Fetch FORECAST
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const forecastData = await forecastRes.json();

      // If forecast has no list, avoid crashing
      if (!forecastData.list) {
        setForecast([]);
        return;
      }

      // Filter for ~12pm each day
      const filtered = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(filtered);
    } catch (error) {
      alert("API Error. Please check your key or internet connection.");
    }
  };

  return (
    <div className="app">
      <div className="overlay">
        {/* Search Box */}
        <div className="search-bar">
          <input
            type="text"
            value={city}
            placeholder="Search city..."
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={searchWeather}>Search</button>
        </div>

        {/* Main Weather Card */}
        {weather && <WeatherCard data={weather} />}

        {/* Forecast Strip */}
        {forecast.length > 0 && (
          <div className="forecast-container">
            {forecast.map((day, index) => (
              <ForecastCard key={index} day={day} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
