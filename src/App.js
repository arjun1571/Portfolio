import './App.css';
import Banner from './component/Banner/Banner';
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
    </div>
  );
}

export default App;
