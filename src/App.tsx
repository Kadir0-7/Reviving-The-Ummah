import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Quran from './components/quran-page/Quran';



const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body ">
      <Quran/>
        <Sidebar />
       
      </div>
    </div>
  );
}

export default App;