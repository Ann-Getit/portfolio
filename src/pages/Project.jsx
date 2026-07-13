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
     <p>An interactive chatbot application built with React, JavaScript, and CSS. It uses a serverless API , combining a local qa.json for knowledge base responses with the Gemini API for AI-generated replies.</p>
     <Link to="/chatbot" className="sameAsspan">View project →</Link>
  </div>
   <div className="project-card">
     <h3>Magic 8 ball</h3>
     <p>An interactive Magic 8 Ball tool that gives dynamic yes/no answers. </p>
      <span onClick={() => window.location.href = "https://ann-getit.github.io/magic8ball/"}
      >View project →</span>
  </div>
  {/*} <div className="project-card">
     <h3>Tech website</h3>
     <p>A website with login and signup functionality. Built with HTML, CSS, and JavaScript.</p>
      <span  onClick={() => window.location.href = "https://ann-getit.github.io/techsite/"}
      >View project →</span>
  </div>*/}
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
     <p className="dashParagr"> An interactive dashboard showing filtered invoices. Tool is built with React, CSS, JavaScript and JSON file.  </p>
     <Link to="/dash-board" className="sameAsspan">
      View project →</Link>
  </div>
   <div className="project-card">
     <h3>Basic & sport website</h3>
     <p>A responsive website built with React, CSS, and JavaScript. focused on the layouts design and navigation between pages</p>
      <span  onClick={() => window.location.href = "https://ann-getit.github.io/basic-sport/"}
      >View project →</span>
  </div>
   <div className="project-card">
     <h3>website Sook restaurant</h3>
     <p>A responsive website built with React, CSS, and JavaScript. Connected to an external API that fetches and display menu data on the website</p>
      <span  onClick={() => window.location.href = "https://ann-getit.github.io/web_model/"}
      >View project →</span>
  </div>

 </div>
</section>
</div>
  );
};

export default Project;
