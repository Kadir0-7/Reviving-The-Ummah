import React from 'react';
import Quran from './pages/Quran';
import "./App.css"
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/quran' element={<Quran/>} />
      </Routes>
      </BrowserRouter>
      
      </div>
  
  );
}

export default App;