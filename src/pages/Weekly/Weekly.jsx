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

  return (
    <span className="details" id="weekly">
        <h1 className="title">Weather App <h1 className="picture"></h1></h1>
      <div className="weather-form">
        <input 
          type="text"
          placeholder="Type Any City"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleSubmit}
        />
        <button onClick={handleSubmit}>🔍</button>
      </div>
      <h1 className="forecast-title">Weekly Forecast</h1>
      {typeof weather.list != 'undefined' ? (
        <div className="weather-weekly-information">
          <div className="first-row">
            <h1>😎 &nbsp;{ days[0] }: { Math.round(weather?.list[0].main?.temp) }°</h1>
            <h1>😢 &nbsp;{ days[1] }: { Math.round(weather?.list[0].main?.temp) }°</h1>
          </div>
          <div className="second-row">
            <h1>😔 &nbsp;{ days[2] }: { Math.round(weather?.list[8].main?.temp) }°</h1>
            <h1>😑 &nbsp;{ days[3] }: { Math.round(weather?.list[16].main?.temp) }°</h1>
            <h1>😊 &nbsp;{ days[4] }: { Math.round(weather?.list[24].main?.temp) }°</h1>
            <h1>😃 &nbsp;{ days[5] }: { Math.round(weather?.list[32].main?.temp) }°</h1>
            <h1>🥳 &nbsp;{ days[6] }: { Math.round(weather?.list[39].main?.temp) }°</h1>
            <h1>🌆 &nbsp;City: { weather.city?.name } {weather.city?.country }</h1>
          </div>
        </div>
       ) : ("")} 
    </span>
  )
}