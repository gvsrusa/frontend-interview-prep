import { useState } from 'react';

// Mock weather data
const WEATHER_DB = {
  london: { temp: 12, condition: 'Cloudy', humidity: 78, wind: 15 },
  'new york': { temp: 22, condition: 'Sunny', humidity: 55, wind: 10 },
  tokyo: { temp: 28, condition: 'Humid', humidity: 85, wind: 8 },
  paris: { temp: 18, condition: 'Rainy', humidity: 70, wind: 12 },
  sydney: { temp: 25, condition: 'Clear', humidity: 60, wind: 20 },
};

function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = WEATHER_DB[city.toLowerCase()];
      if (data) resolve({ city, ...data });
      else reject(new Error(`City "${city}" not found`));
    }, 500);
  });
}

export default function WeatherDashboard() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  // TODO: Implement search function
  // 1. Set loading state
  // 2. Call fetchWeather
  // 3. On success, update weather and add to history (max 5)
  // 4. On failure, set error
  const handleSearch = (e) => {
    e.preventDefault();
    // implement me
  };

  return (
    <div>
      <h2>Weather Dashboard</h2>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name..."
        />
        <button type="submit">Search</button>
      </form>

      {/* TODO: Show recent history as clickable items */}
      {history.length > 0 && (
        <div style={{ marginTop: 8 }}>
          <strong>Recent: </strong>
          {history.map((city) => (
            <span key={city} style={{ marginRight: 8, cursor: 'pointer', textDecoration: 'underline' }}>
              {city}
            </span>
          ))}
        </div>
      )}

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && !loading && (
        <div style={{ marginTop: 16, padding: 16, border: '1px solid #ccc' }}>
          <h3>{weather.city}</h3>
          <p>Temperature: {weather.temp}°C</p>
          <p>Condition: {weather.condition}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.wind} km/h</p>
        </div>
      )}
    </div>
  );
}
