import React from "react";
import { useEffect,useState, } from "react";
import { useLocation } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Skill from './Components/Skill/Skill'
import Project from './Components/Project/Project'
import Navimg from './Assets/Navimg.png'
import Contact from './Components/Contact/Contact'
import { Route,Routes } from "react-router-dom";
import Homeimg from './Assets/HomeImage.jpg'
import img1 from './Assets/Dora-ai.png'
import img2 from './Assets/Canva.png'
import img3 from './Assets/Figma.png'
import Projectimg1 from './Assets/ROCK PAPER SCISSOR.png'
import Projectimg3 from './Assets/SIMPLE CALCULATOR.png'
import Projectimg2 from './Assets/Etch-a-Sketch Color Game.png'
import Projectimg4 from './Assets/Flames.png'


function App() {
  const Skillimages=[img1,img2,img3];
  const ProjectImages = [Projectimg1, Projectimg2, Projectimg3,Projectimg4];
  const location = useLocation();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App bg-stone-950">
      <NavBar Navimg={Navimg} />
      <Routes>
        <Route path="/" id="Home" element={<Home Homeimg={Homeimg}/>} />
      </Routes>
      <div id="Skills">
        <Skill Skillimages={Skillimages}></Skill>
      </div>
      <div id="projects">
        <Project ProjectImages={ProjectImages}  />
      </div>
      <div id="Contact">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
