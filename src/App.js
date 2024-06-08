import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <TechStack/>
    </div>
  );
}

export default App;
