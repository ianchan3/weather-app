import "./Today.css";

export default function Today ({ input, setInput, weather, setWeather, months, days, api}) {

  const today = (d) => {
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`
  }

  const handleSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click" ) {
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
    <span className='details'>
      <div className="weather-form">
        <h1>Weather App 🌤</h1>
        <input 
          type="text" 
          placeholder="Type Any City Name"
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={handleSubmit} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {typeof weather.main != 'undefined' ? (
        <div className='weather-information'>
          <h1>Date: { today( new Date()) }</h1>
          <h1>City: {`${ weather.name }, ${ weather.sys.country }`}</h1>
          <h1>Temperature: {` ${ weather.main.temp }°` }</h1>
          <h1>Wind: { weather.wind.speed } mph</h1>
          <h1>Description: { weather.weather[0].description }</h1>
          <h1>Description: { weather.rain }</h1>
          
          {/* <img src={ `${iconURL}${weather.weather[0].icon}.png`}> </img> */}
        </div>
      ) : ("")}
    </span>
  )
}