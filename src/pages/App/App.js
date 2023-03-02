import './App.css';
import Today from "../Today/Today";
import Weekly from "../Weekly/Weekly";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";


export default function App() {

  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({});

  const api = {
    key: "3db5c4a90aa425763a6b2d8a10469531",
    base: "https://api.openweathermap.org/data/2.5/",
  }

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route path="/today" element={<Today input={input} setInput={setInput} weather={weather} setWeather={setWeather} months={months} days={days} api={api}/>} />
        <Route path="/weekly" element={<Weekly input={input} setInput={setInput} weather={weather} setWeather={setWeather} api={api} months={months} days={days}/>} />
      </Routes>
    </main>
  );
}


