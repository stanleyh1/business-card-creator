import './App.css';
import CardCreator from './Components/CardCreator';
import BusinessCard from './Components/BusinessCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<CardCreator />} />
    <Route path="/yourbusinesscard" element={<BusinessCard/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
