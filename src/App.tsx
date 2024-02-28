import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
       
        <Sidebar />
       
      </div>
    </div>
  );
}

export default App;