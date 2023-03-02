import "./Weekly.css";

export default function Weekly () {
  return (
    <span className="details">
      <div className="weather-form">
        <h1>Weather App 🌤</h1>
        <input 
          type="text"
          placeholder="Type Any City Name"
        />
        <button>Submit</button>
      </div>
      <div className="weather-weekly-information"></div>
    </span>
  )
}