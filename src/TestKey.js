export default function TestKey() {
    return (
      <div>
        <h1>Key Loaded:</h1>
        <p>{process.env.REACT_APP_WEATHER_KEY}</p>
      </div>
    );
  }
  