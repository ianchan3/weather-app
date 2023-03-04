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
        <h1 className="title">Weather App 🌤</h1>
      <div className="weather-form">
        <input 
          type="text"
          placeholder="Type Any City Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleSubmit}
        />
        <button onClick={handleSubmit}>🔍</button>
      </div>
      <h1 className="forecast-title">Weekly Forecast</h1>
      {typeof weather.list != 'undefined' ? (
        <div className="weather-weekly-information">

          <h1>🥳 &nbsp;{ days[day] }: { Math.round(weather?.list[0].main?.temp) }°</h1>
          <h1>😎 &nbsp;{ days[day + 1] }: { Math.round(weather?.list[8].main?.temp) }°</h1>
          <h1>😃 &nbsp;{ days[0] }: { Math.round(weather?.list[16].main?.temp) }°</h1>
          <h1>😢 &nbsp;{ days[1] }: { Math.round(weather?.list[24].main?.temp) }°</h1>
          <h1>😔 &nbsp;{ days[2] }: { Math.round(weather?.list[32].main?.temp) }°</h1>
          <h1>😑 &nbsp;{ days[3] }: { Math.round(weather?.list[39].main?.temp) }°</h1>
          <h1>🌆 &nbsp;City:{ weather.city?.name } {weather.city?.country }</h1>
          <h1>🌡️ &nbsp;Temperature: { Math.round(weather?.list[0]?.main?.temp) }°</h1>
        </div>
       ) : ("")} 
    </span>
  )
}