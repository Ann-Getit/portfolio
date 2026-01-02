import { useState } from "react";
/*import { Link } from 'react-router-dom';*/ /**kan je nog gebruiken als je interne links binnen Project wilt,  */
import { useNavigate } from "react-router-dom";
import "../pages/Project.css";
import "../index.css";



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







    
<sections className="projects">
      <h1 className="projects-title">Projects</h1>

 <div className="projects-grid">
      {/** project cards komen hier  */}
   <div className="project-card">
     <h3>Project titel</h3>
     <p>Korte beschrijving van het project.</p>
      <span>Bekijk project →</span>
  </div>
 </div>


{/**. {projects.map(project => (
  <ProjectCard key={project.id} {...project} />
))}
  */}

    
</sections>







</div>
  );
};

export default Project;
