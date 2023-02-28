import './App.css';

export default function App() {
  const city = "Los Angeles";
  const date = "Feb 28 2023";
  const temperature = 70;
  const description = "cloudy";
  const wind = "2 mph"

  return (
    <body className="App">
      <div className='details'>
        <h1>Weather App</h1>
        <input type="text" placeholder="Search By City Name"></input>
        <button>Submit</button>
        <h1>{ city }</h1>
        <h1>{ date }</h1>
        <h1>{ temperature }</h1>
        <h1>{ description }</h1>
        <h1>{ wind }</h1>
      </div>
    </body>
  );
}


