import './App.css';
import AboutMe from './component/AboutMe/AboutMe';
import Banner from './component/Banner/Banner';
import Contact from './component/Contact/Contact';
import Fotter from './component/Fotter/Fotter';
import NavBar from './component/NavBar/NavBar';
import Projects from './component/Project/Projects';
import Service from './component/Service/Service';

function App() {
  return (
    <div className="max-w-[1280px] mx-auto md:p-3  p-1">
      <NavBar></NavBar>
      <Banner></Banner>
      <Service></Service>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
