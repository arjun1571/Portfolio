import './App.css';
import AboutMe from './component/AboutMe/AboutMe';
import Banner from './component/Banner/Banner';
import Contact from './component/Contact/Contact';
import Fotter from './component/Fotter/Fotter';
import NavBar from './component/NavBar/NavBar';
import Projects from './component/Project/Projects';
// import ShowSlide from './component/ProjectShowCaseSlide/ShowSlide';
import Service from './component/Service/Service';
import What from './component/WhatIDo/What';

function App() {
  return (
    <div className="max-w-[1480px] mx-auto md:p-3  p-1">
      <NavBar></NavBar>
      <Banner></Banner>

      <Service></Service>
      {/* <ShowSlide></ShowSlide> */}
      <What></What>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
