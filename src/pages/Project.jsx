import { useState } from "react";
/*import { Link } from 'react-router-dom';*/ /**kan je nog gebruiken als je interne links binnen Project wilt,  */
import { useNavigate, Link } from "react-router-dom";
import "../pages/Project.css";
import "../assets/Nav.css";




const Project = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();




  const handleNavClick = (id) => {

    
    navigate(`/#${id}`);
    setOpen(false);

  };

  return (
<div className="page">

    {/* Navbar alleen voor Project-pagina */}
      <nav className="nav-container">
        <div className="logo">A.developer</div>

      <ul className="nav-links desktop">
          <li onClick={() => handleNavClick("home")}>Home</li>
          <li onClick={() => handleNavClick("about")}>About</li>
          <li onClick={() => handleNavClick("contact")}>Contact</li>
      </ul>

           {/* Hamburger voor mobiel */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </div>




{/* Mobile overlay */}
      <ul className={`nav-links mobile ${open ? "open" : ""}`}>
        <li onClick={() => { handleNavClick("home"); setOpen(false); }}>Home</li>
        <li onClick={() => { handleNavClick("about"); setOpen(false); }}>About</li>
         <li onClick={() => { handleNavClick("contact"); setOpen(false); }}>Contact</li>
        </ul>
         {open && <div className="overlay" onClick={() => setOpen(false)} />}

      </nav>







    
<section className="projects">
      <h1 className="projects-title">Projects</h1>

 <div className="projects-grid">

   <div className="project-card">
     <h3>Reactive chatbot</h3>
     <p>An interactive chat application built using vanilla JavaScript, connected to a serverless API for dynamic responses.</p>
      <span  onClick={() => window.location.href = "/projects/chatbot/index.html"}
      >View project →</span>
  </div>
   <div className="project-card">
     <h3>Magic 8 ball</h3>
     <p>An interactive Magic 8 Ball tool that gives dynamic yes/no answers. </p>
      <span onClick={() => window.location.href = "https://ann-getit.github.io/magic8ball/"}
      >View project →</span>
  </div>
   <div className="project-card">
     <h3>moving balls</h3>
     <p>A fun web animation where you can watch colorful balls move and bounce around the screen, built with HTML, CSS, and JavaScript.</p>
      <span  onClick={() => window.location.href = "https://ann-getit.github.io/moving-balls/"}
      >View project →</span>
  </div>
   <div className="project-card">
     <h3>Interest Calculator</h3>
     <p>A simple calculator built with HTML, CSS and JavaScript to calculates interest for any amount </p>
      <span onClick={() => window.location.href = "https://ann-getit.github.io/rente-berekening/"}
      >View project →</span>
  </div>
   <div className="project-card">
     <h3>Map</h3>
     <p>A world map built with Leaflet, featuring Dutch train stations added via an external API and JavaScript.</p>
      <span  onClick={() => window.location.href = "/projects/landkaart/index.html"}
      >View project →</span>
  </div>
  <div className="project-card">
    <h3>Dashboard</h3>
     <p className="dashParagr"> An interactive dashboard showing filtered invoices. Tool is built with HTML, CSS, JavaScript and JSON using React.  </p>
     <Link to="/dash-board">
      View project →</Link>
  </div>

 </div>
</section>
</div>
  );
};

export default Project;
