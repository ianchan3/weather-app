import "./Today.css";

export default function Today ({ input, setInput, weather, setWeather, months, days, api, status, setStatus}) {

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

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        fetch(`${api.base}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${api.key}`) 
        .then(response => response.json())
        .then(result => {
          setWeather(result);
        })
      })
    }
  }

  return (
    <main className="Today">
      <span className='details'>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700;800&family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
          <h1 className="title">Weather App <h1 className="picture"></h1></h1>
        <div className="weather-form">
        <button id="location" onClick={getLocation}></button>
          <input 
            type="text" 
            placeholder="Type Any City"
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={handleSubmit} 
          />
          <button onClick={handleSubmit}>🔍</button>
        </div>
        <h1>{status}</h1>
        {typeof weather.main != 'undefined' ? (
          <div className='weather-daily-information'>
              <h1 className="date">{ today( new Date()) }</h1>
              <h1>{`${ weather.name }, ${ weather.sys.country }`}</h1>
              <h1 className="temp"> {` ${ Math.round(weather.main.temp) }°` }</h1>
              <h1>Low: { Math.round(weather.main.temp_min) }° / High: { Math.round(weather.main.temp_max) }°</h1>
              <div className="smaller-details">
                <h1>Description </h1>
                <h1>Wind </h1>
                <h1>Feels Like </h1>
                <h1> { weather.weather[0].main } </h1>
                <h1> { Math.round(weather.wind.speed / 1.609)} MPH</h1>
                <h1> { Math.round(weather.main.feels_like) }°</h1>
              </div>
          </div>
        ) : ("")}
      </span>
    </main>
  )
}