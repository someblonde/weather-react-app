import React, { useState } from "react";
import axios from "axios";
import DateTime from "./DateTime";
import "./Weather.css";

export default function Weather() {
 let [city, setCity] = useState("");
 let [weather, setWeather] = useState({});
 let [active, setActive] = useState(false);

    
   
    function displayWeather(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  celsiusTemperature = response.data.main.temp;
  document.querySelector("#temperature").innerHTML = Math.round(
    celsiusTemperature
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

    

    celsiusTemperature = response.data.main.temp;
    let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
    iconElement.setAttribute("alt", response.data.weather[0].description);
}
   
function displayForecast(response){
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;
   
  for (let index = 0; index <6; index++) {
      forecast = response.data.list[index];
     forecastElement.innerHTML  +=`<div class="col">
        ${formatHours(forecast.dt * 1000)} <br />
        <img src ="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" 
        alt="icons" class="hours" 
        />
        <div class="weather-forecast-temperature">
          <strong>${Math.round (forecast.main.temp_max)}°</strong> ${Math.round(forecast.main.temp_min)}°
        </div>
      </div>`;

  }}

 

     

function search(event) {
  event.preventDefault();
  let apiKey = "eadddec13a962cb9c3c421b81823ffb8";
  let city = document.querySelector("#city");
  let searchInput = document.querySelector("#search-text-input");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
 
  city.innerHTML = `${searchInput.value}`;
  axios.get(apiUrl).then(displayWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
  
}


 function searchLocation(position) {
  let apiKey = "eadddec13a962cb9c3c421b81823ffb8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}


function getCurrentlocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let currentLocationbutton = document.querySelector("#current-location-button");
currentLocationbutton.addEventListener("click", getCurrentlocation);


function displayFahrenheitTemperature(event){
  event.preventDefault();
   celsiusLink.classList.remove("active");
   fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML=Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event){
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active")
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}



let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let celsiusTemperature = null;
    
}

 if (active) {
    return (
        <div class="Weather">
      </br>
      <form id="search-form" class="search-block">
        </br>
        <input
          type="text"
          id="search-text-input"
          placeholder="Enter a location"
        />
        <input type="submit" />

        <button
          type="current-location-button"
          id="current-location-button"
          class="btn btn-secondary btn-sm"
        >
          Current
        </button>
      </form>
      </br>
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title" id="city">Horsham, UK </h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <h6 id="day-time">Friday 7:00pm</h6>
          <div class ="weather-icon">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy"
            id="icon"
            class="main"
            />
          
          <span id="temperature"></span>
          <span class="units"
            ><a href="#" id="celsius-link" class="active">°C</a> | 
            <a href="#" id="fahrenheit-link"> °F </a></span
          >
          </div>

          <li>Humidity: <span class="humidity" id="humidity"></span>%</li>
          <li>Wind: <span class="wind" id="wind"></span>km/h</li>
        </div>
        <p class="card-text" id="description"></p>
      </div>
    </div>

    <br />
    <br />
    <div class="row" id="forecast">
      <div class="col">
          12:00 </br>
        <img src ="https://ssl.gstatic.com/onebox/weather/48/rain_light.png"  
        alt="icons" class="hours" 
        />
        <div class="weather-forecast-temperature">
          <strong>16°</strong> 15°
        </div>
      </div>
       <div class="col">
          12:00 </br>
        <img src ="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" 
        alt="icons" class="hours" 
        />
        <div class="weather-forecast-temperature">
          <strong>15°</strong> 12°
        </div>
      </div>
       <div class="col">
          12:00 </br>
        <img src ="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" 
        alt="icons" class="hours" 
        />
        <div class="weather-forecast-temperature">
          <strong>10°</strong> 15°
        </div>
      </div>
       <div class="col">
          12:00 </br>
        <img src ="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" 
        alt="icons" class="hours" 
        />
        <div class="weather-forecast-temperature">
          <strong>16°</strong> 18°
        </div>
      </div>
       <div class="col">
          12:00 </br>
        <img src ="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" 
        alt="icons" class="hours" 
        />
        <div class="weather-forecast-temperature">
          <strong>17°</strong> 15°
        </div>
      </div>
       <div class="col">
          12:00 </br>
        <img src ="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" 
        alt="icons" class="hours" 
        />
        <div class="weather-forecast-temperature">
          <strong>17°</strong> 15°
        </div>
      </div>
      
      </div>
      
    </div>
    )
 }

