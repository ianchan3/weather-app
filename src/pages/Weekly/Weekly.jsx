import "./Weekly.css";

export default function Weekly ({ days, api, input, setInput, weather, setWeather, status, setStatus }) {

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

const getLocation = () => {
  if (!navigator.geolocation) {
    setStatus("Geolocation is not supported by your browser");
  } else {
    setStatus("Locating...");
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      fetch(`${api.base}forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${api.key}`) 
      .then(response => response.json())
      .then(result => {
        setWeather(result);
      })
    })
  }
}

  return (
    <main className="Weekly">
      <span className="details">
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
        {typeof weather.list != 'undefined' ? (
          <div className="weather-weekly-information">
              <h1>😎 &nbsp;{ days[0] }: { Math.round(weather?.list[0].main?.temp) }°</h1>
              <h1>😢 &nbsp;{ days[1] }: { Math.round(weather?.list[2].main?.temp) }°</h1>
              <h1>😔 &nbsp;{ days[2] }: { Math.round(weather?.list[8].main?.temp) }°</h1>
              <h1>😑 &nbsp;{ days[3] }: { Math.round(weather?.list[15].main?.temp) }°</h1>
              <h1>😊 &nbsp;{ days[4] }: { Math.round(weather?.list[22].main?.temp) }°</h1>
              <h1>😃 &nbsp;{ days[5] }: { Math.round(weather?.list[30].main?.temp) }°</h1>
              <h1>🥳 &nbsp;{ days[6] }: { Math.round(weather?.list[39].main?.temp) }°</h1>
              <h1>🌆 &nbsp;City: { weather.city?.name } {weather.city?.country }</h1>
          </div>
        ) : ("")} 
      </span>
    </main>
  )
}