import './App.css';
import { Routes, Route } from 'react-router-dom';
import Today from "../Today/Today";



export default function App() {
  return (
    <body className="App">
      <Routes>
        <Route path="/" element={<Today />}/>
        <Route path="/tomorrow" />
        <Route path="/weekly" />
        <Route path="/monthly" />
      </Routes>
    </body>
  );
}


