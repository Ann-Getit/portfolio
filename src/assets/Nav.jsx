import { useState } from "react";

import "../index.css";


export default function Nav() {
const [open, setOpen] = useState(false);
  return (
    <>
    <nav className="nav-container">
        <div className="logo">A.developer</div>

        {/* Desktop links */}
      <ul className="nav-links desktop">
          <li><a href="#home">Home</a></li> {/** inplaats van anchor href toch wel link to gebruiken zodat ik niet vast blijft in "project page" */}
          <li><a href="#about">About</a></li> {/** hover voor de nav links */}

          <li className="dropdown">
              <span className="dropbtn">Work ▾</span>
              <ul className="dropdown-content">
                <li><a href="/project">Projects</a></li> 
             </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger voor mobiel */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </div>




{/* Mobile overlay */}
      <ul className={`nav-links mobile ${open ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li className="dropdown">
          <span className="dropbtn">Work ▾ </span>
          <ul className="dropdown-content">
        <li><a href="/project" onClick={() => setOpen(false)}>Projects</a></li>
        </ul>
        </li>
        
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      {/* overlay achtergrond bij mobiel */}
       {open && <div className="overlay" onClick={() => setOpen(false)} />}


      </nav>


      
    </>
  );
}


