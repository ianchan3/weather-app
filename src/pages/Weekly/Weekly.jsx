import "./Weekly.css";
import { useEffect } from "react";

export default function Weekly ({ months, days, api, input, setInput, weather, setWeather }) {

const handleSubmit = (e) => {
  if (e.type === "click" || e.key === "Enter") {
    fetch(`${api.base}forecast?q=${input}&units=imperial&appid=${api.key}`)
    .then(response => response.json())
    .then(result => {
      setWeather(result);
      console.log(result);
      setInput("");
    })
  }
}

let d = new Date();
let day = d.getDay();
let daysOfWeek = [];

  for (let i = day; i < days.length; i++) {
    daysOfWeek.push(days[i]);
  }
  return (
    <span className="details" id="weekly">
      <div className="weather-form">
        <h1>Weather App 🌤</h1>
        <input 
          type="text"
          placeholder="Type Any City Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleSubmit}
        />
        <button onClick={handleSubmit}>Click Me or Press Enter</button>
      </div>
      <h1 className="forecast-title">Weekly Forecast</h1>
      {typeof weather.list != 'undefined' ? (
        <div className="weather-weekly-information">
          { daysOfWeek.map((dayOfWeek) => 
            <h1>{dayOfWeek} {weather?.list[1].main?.temp}</h1>
          )}
        <h1>{ weather.city?.name } {weather.city?.country }</h1>
        <h1>{ weather?.list[0]?.dt_txt } </h1>
        <h1>{ weather?.list[0]?.main?.temp }</h1>
      </div>
       ) : ("")} 
    </span>
  )
}