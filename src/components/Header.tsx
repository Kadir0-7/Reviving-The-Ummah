import React from 'react';
import { Text } from "@fluentui/react-components";
import "../index.css"
const Header: React.FC = () => {


  return (
    <div className="header">
       <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <Text size={200}>Reviving The Ummah</Text>
        </div>
        <ul className="navbar__links">
          <li><a href="/">Home</a></li>
          <li><a href="/explore">Explore Islam</a></li>
          <li><a href="/notifications">Hadiths</a></li>
          <li><a href="/messages">Quran</a></li>
        </ul>
        <div className="navbar__profile">
          {/* You can add profile picture and other profile information here */}
          
          {/* <span>Username</span> */}
        </div>
      </nav>
    </header>
    </div>
  );
}

export default Header;