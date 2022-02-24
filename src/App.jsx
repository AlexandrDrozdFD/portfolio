import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import './index.css';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
