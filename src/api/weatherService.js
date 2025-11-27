export const getWeather = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
  
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
  
    if (!response.ok) {
      throw new Error("City not found!");
    }
  
    return response.json();
  };
  