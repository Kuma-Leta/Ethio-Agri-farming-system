import React, { useState } from "react";
import axios from "axios";

const WeatherUpdates: React.FC = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const api_key = import.meta.env.VITE_WHETHER_API_KEY;

  const fetchWeather = async () => {
    if (!location) {
      setError("Please enter a location.");
      return;
    }

    try {
      setError(null);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`
      );
      console.log(response);
      setWeatherData(response.data);
    } catch (err) {
      console.log(err?.message);
      setError("Could not fetch weather data. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded max-w-md mx-auto w-full">
      <h2 className="text-lg font-semibold mb-4">Weather Updates</h2>

      {/* Input for location */}
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          className="border rounded px-3 py-2 w-full"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={fetchWeather}
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Weather Data Display */}
      {weatherData && (
        <div>
          <h3 className="text-xl font-bold mb-2">{weatherData.name}</h3>
          <p className="text-gray-600">
            {weatherData.weather[0].description}, {weatherData.main.temp}°C
          </p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>

          {/* Visual Representation (Optional) */}
          <div className="mt-4">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="inline-block"
            />
            <span className="ml-2 text-lg">
              {weatherData.weather[0].description}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherUpdates;
