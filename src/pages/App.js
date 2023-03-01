import './App.css';
import { useState } from 'react';

const api = {
  key: "3db5c4a90aa425763a6b2d8a10469531",
  base: "https://api.openweathermap.org/data/2.5/",
}

export default function App() {

  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({});

  const fullDate = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

const handleSubmit = (e) => {
  if (e.key == "Enter" || e.type == "click" ) {
    fetch(`${api.base}weather?q=${input}&units=imperial&appid=${api.key}`) 
    .then(response => response.json())
    .then(result => {
      setWeather(result);
      console.log(result);
      setInput("");
    })
  }
}
  return (
    <div className="App">
      <span className='details'>
        <div className="weather-form">
          <h1>Weather App</h1>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={handleSubmit}  />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {typeof weather.main != 'undefined' ? (
          <div>
            <h1>Date: { fullDate( new Date()) }</h1>
            <h1>City: {`${ weather.name }, ${ weather.sys.country }`}</h1>
            <h1>Temperature: {` ${ weather.main.temp }°` }</h1>
            <h1>Wind: { weather.wind.speed } mph</h1>
            <h1>Description: { weather.weather[0].description }</h1>
          </div>
        ) : ("")}
        </span>
        </div>
  );
}


