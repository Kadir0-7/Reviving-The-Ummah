import React from 'react';
import { Text } from "@fluentui/react-components";
import "../index.css"  ;
import { useState,  } from "react";
  import { Navbar, Nav, Container } from "react-bootstrap";
  import "../index.css";

 
const Header: React.FC = () => {

    const [activeLink, setActiveLink] = useState('home');

  

  
    const onUpdateActiveLink = (value: any) => {
      setActiveLink(value);
    }
  
    return (
     
        <Navbar expand="md">

            <Navbar.Brand href="/">
            <Text size={200}>Reviving The Ummah</Text>
            </Navbar.Brand>
          
              <Nav className="ms-auto">
                <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'islam' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Explore Islam</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'hadiths' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Hadiths</Nav.Link>
                <Nav.Link href="/quran" className={activeLink === 'quran' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Quran</Nav.Link>
              </Nav>

        </Navbar>
     
    )
  

  // return (
  //   <div className="header">
  //      <header className="header">
  //     <nav className="navbar">
  //       <div className="navbar__logo">
  //         <Text size={200}>Reviving The Ummah</Text>
  //       </div>
  //       <ul className="navbar__links">
  //         <li><a href="/">Home</a></li>
  //         <li><a href="/explore">Explore Islam</a></li>
  //         <li><a href="/notifications">Hadiths</a></li>
  //         <li><a href="../components/Quran'">Quran</a></li>
  //       </ul>
  //       <div className="navbar__profile">
          
  //       </div>
  //     </nav>
  //   </header>
  //   </div>
  // );
}

export default Header;