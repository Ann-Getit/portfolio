import { useState } from "react";
import { Link } from "react-router-dom";

import "../assets/Nav.css";

export default function Nav() {
const [open, setOpen] = useState(false);
  return (
    <>
    <nav className="nav-container">

        <div className="logo">A.developer</div>

        {/* Desktop links */}
      <ul className="nav-links desktop">
          <li><Link to="#home">Home</Link></li> {/** inplaats van anchor href toch wel link to gebruiken zodat ik niet vast blijft in "project page" */}
          <li><Link to="#about">About</Link></li> {/** hover voor de nav links */}
          
          <li className="dropdown">
              <span className="dropbtn">Work ▾</span>
              <ul className="dropdown-content">
                <li><Link to="/project">Projects</Link></li> 
             </ul>
          </li> 
          <li><Link to="#contact">Contact</Link></li>
        </ul>

        {/* Hamburger voor mobiel */} 
      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776; 
      </div> 



{/* Mobile overlay */}
      <ul className={`nav-links mobile ${open ? "open" : ""}`}>
        <li><Link to="#home" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="#about" onClick={() => setOpen(false)}>About</Link></li>
        <li className="dropdown">
          <span className="dropbtn">Work ▾ </span>
          <ul className="dropdown-content">
        <li><Link to="/project" onClick={() => setOpen(false)}>Projects</Link></li>
        </ul>
        </li>
        
        <li><Link to="#contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>

      {/* overlay achtergrond bij mobiel */}
       {open && <div className="overlay" onClick={() => setOpen(false)} />}


      </nav>


      
    </>
  );
}


