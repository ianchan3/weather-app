import './App.css';
import { useState } from 'react';

export default function App() {

  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({});

  const api = {
    key: "3db5c4a90aa425763a6b2d8a10469531",
    base: "https://api.openweathermap.org/data/2.5/",
  }

const handleSubmit = (e) => {
  fetch(`${api.base}weather?q=${input}&units=metric&appid=${api.key}`) 
  .then(response => response.json())
  .then(result => {
    setWeather(result);
    console.log(result);
    setInput("");
  })
}

  return (
    <div className="App">
      <span className='details'>
        <div>
          <h1>Weather App</h1>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
        <h1>{ weather.name }</h1>

        </div>
      </span>
    </div>
  );
}


