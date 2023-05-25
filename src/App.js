import './App.css';
import Banner from './component/Banner/Banner';
import Contact from './component/Contact/Contact';
import Fotter from './component/Fotter/Fotter';
import NavBar from './component/NavBar/NavBar';
import Projects from './component/Project/Projects';
import Service from './component/Service/Service';

function App() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <NavBar></NavBar>
      <Banner></Banner>
      <Service></Service>
      <Projects></Projects>
      <Contact></Contact>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
