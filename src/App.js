import './App.css';
import CardCreator from './Components/CardCreator.js';
import BusinessCard from './Components/BusinessCard.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<CardCreator />} />
    <Route path="/yourbusinesscard/:id" element={<BusinessCard/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
