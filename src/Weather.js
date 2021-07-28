  
import React from "react";

import "./Weather.css";



export default function Weather() {



  let weatherData = {
    city: "Horsham",
    temperature: "21",
    date: "Friday 14:00",
    description: "Partly sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 75,
    wind: 7
  };




  return (
    <div className="Weather">
      <form className="search-block">
        <input type="text" placeholder="Enter a location" />
        <input type="submit" />
        <button
          type="current-location-button"
          id="current-location-button"
          className="btn btn-secondary btn-sm"
        >
          Current
        </button>
      </form>
      <br />
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{weatherData.city}</h5>
          
          <h6>{weatherData.date}</h6>
          <div className="weather-icon">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="main"
            />

            <span>{weatherData.temperature}</span>
            <span className="units">
              <a href="/">°C</a> |<a href="/"> °F </a>
              <div>{weatherData.description}</div>
            </span>
          </div>

          <li>Humidity:{weatherData.humidity}%</li>
          <li>Wind:{weatherData.wind}km/h</li>
        </div>
        <p className="card-text"></p>
      </div>

      <br />
      <br />
      <div className="row">
        <div className="col">
          12:00 <br />
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png"
            alt="icons"
            className="hours"
          />
          <div className="weather-forecast-temperature">
            <strong>16°</strong> 15°
          </div>
        </div>
        <div className="col">
          12:00 <br />
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png"
            alt="icons"
            className="hours"
          />
          <div className="weather-forecast-temperature">
            <strong>15°</strong> 12°
          </div>
        </div>
        <div className="col">
          12:00 <br />
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png"
            alt="icons"
            className="hours"
          />
          <div className="weather-forecast-temperature">
            <strong>10°</strong> 15°
          </div>
        </div>
        <div className="col">
          12:00 <br />
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png"
            alt="icons"
            className="hours"
          />
          <div className="weather-forecast-temperature">
            <strong>16°</strong> 18°
          </div>
        </div>
        <div className="col">
          12:00 <br />
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="icons"
            className="hours"
          />
          <div className="weather-forecast-temperature">
            <strong>17°</strong> 15°
          </div>
        </div>
        <div className="col">
          12:00 <br />
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="icons"
            className="hours"
          />
          <div className="weather-forecast-temperature">
            <strong>17°</strong> 15°
          </div>
        </div>
      </div>
    </div>
  );
}



