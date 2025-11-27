export default function ForecastCard({ day }) {
    const date = new Date(day.dt_txt);
    const { icon } = day.weather[0];
    const { temp } = day.main;
  
    return (
      <div className="forecast-card">
        <p className="forecast-day">
          {date.toLocaleDateString("en-US", { weekday: "short" })}
        </p>
  
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="forecast icon"
          className="forecast-icon"
        />
  
        <p className="forecast-temp">{Math.round(temp)}°C</p>
      </div>
    );
  }
  