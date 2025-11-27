export default function WeatherCard({ data }) {
    const { name } = data;
    const { temp, humidity, pressure } = data.main;
    const { description, icon } = data.weather[0];
  
    return (
      <div className="weather-card">
        <h2>{name}</h2>
        <p className="date">{new Date().toDateString()}</p>
  
        <img
          src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
          alt="weather icon"
          className="weather-icon"
        />
  
        <h1 className="temperature">{Math.round(temp)}°C</h1>
        <p className="condition">{description}</p>
  
        <div className="extra-info">
          <p>Humidity: {humidity}%</p>
          <p>Pressure: {pressure} hPa</p>
        </div>
      </div>
    );
  }
  