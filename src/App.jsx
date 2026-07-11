/**  App.jsx is geen contentbestand. Het is:

je router

je layout-skelet

de plek waar je beslist welke pagina zichtbaar is*/
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import useScrollFade from "./useScrollFade";
import Nav from "./assets/Nav"; 
import Dashboard from './projects/dash-board/Dashboard';
import Chatbot from "./projects/chatbot/Chatbot";

/*import Hero from './assets/first-pict.jsx';*/
/*import { ReactComponent as JsIcon } from './js.svg';*/


function App() {
  


  return (
    <Router>
     <header className="App-header fade-in">
      
    </header>

    
      {/*<Nav />*/}
     <main>
     <Routes>
      <Route path="/" element={
          <>
          <Nav />  {/* globale navbar */}
          <Home />
          </>
        } />

        {/* Project route met aangepaste Nav */}
        <Route path="/project" element={<Project />} />
         <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/dash-board" element={<Dashboard />} />
       
     </Routes>
</main> 
   </Router>
  );
} 





export default App;
 




/**  http://localhost:5173
   */

