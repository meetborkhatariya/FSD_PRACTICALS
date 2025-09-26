import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  // Hardcoded weather data
  const weatherData = {
    "new york": "22°C ☀️",
    london: "16°C 🌧️",
    tokyo: "28°C 🌤",
    paris: "18°C ☁️",
    delhi: "30°C 🔥",
  };

  const getWeather = () => {
    console.log("Button clicked ✅"); // Debug line
    if (!city.trim()) {
      setWeather("⚠️ Please enter a city name.");
      return;
    }

    const lowerCity = city.toLowerCase();
    if (weatherData[lowerCity]) {
      const displayCity =
        lowerCity.charAt(0).toUpperCase() + lowerCity.slice(1);
      setWeather(`Weather in ${displayCity}: ${weatherData[lowerCity]}`);
    } else {
      setWeather("❌ City not found!");
    }
  };

  return (
    <div className="weather-container">
      <h2>🌤 Simple Weather App</h2>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      <div id="weatherResult">{weather}</div>
    </div>
  );
}

export default App;
