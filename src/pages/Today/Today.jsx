import "./Today.css";

export default function Today ({ input, setInput, weather, setWeather, months, days, api}) {

  const today = (d) => {
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} | ${month} ${date}, ${year}`
  }

  const handleSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click" ) {
      fetch(`${api.base}weather?q=${input}&units=imperial&appid=${api.key}`) 
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        console.log(result)
        setInput("");
      })
    }
  }
  return (
      <span className='details'>
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
        <h1 className="forecast-title">Today's Forecast</h1>
        {typeof weather.main != 'undefined' ? (
          <div className='weather-daily-information'>
            <h1>📅 &nbsp;Date: { today( new Date()) }</h1>
            <h1>🌆 &nbsp;City: {`${ weather.name }, ${ weather.sys.country }`}</h1>
            <h1>🌡️ &nbsp;Temperature: {` ${ Math.round(weather.main.temp) }°` }</h1>
            <h1>💨 &nbsp;Wind: { Math.round(weather.wind.speed / 1.609)} MPH</h1>
            <h1>📚 &nbsp;Description: { weather.weather[0].description }</h1>
            <h1>🤔 &nbsp;Feels Like: { Math.round(weather.main.feels_like) }°</h1>
            <h1>⬇️ &nbsp;Low: { Math.round(weather.main.temp_min) }°</h1>
            <h1>⬆️ &nbsp;High: { Math.round(weather.main.temp_max) }°</h1>
          </div>
        ) : ("")}
      </span>
  )
}