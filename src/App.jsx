import About from "./comonents/About/About";
import Contact from "./comonents/Contact/Contact";
import Experience from "./comonents/Experience/Experience";
import Home from "./comonents/Home/Home"
import NavBar from "./comonents/NavBar/NavBar"
import Projects from "./comonents/Projects/Projects";

function App() {
 

  return (
      <div className="bg-[#171d32] w-full h-auto overflow-hidden">
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
  );
}

export default App
