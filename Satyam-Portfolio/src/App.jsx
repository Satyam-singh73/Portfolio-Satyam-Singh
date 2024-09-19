import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Certificates from "./Components/Certificates/Certificates";
import BorderLine from "./Components/BorderLine/BorderLine";
import Links from "./Components/Links/Links";
import Qulifications from "./Components/Qulifications/Qulifications";



function App() {
  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <BorderLine />
    <About />
    <BorderLine />
    <Qulifications />
    <BorderLine />
    <Skills />
    <BorderLine />
    <Projects />
    <BorderLine />
    <Certificates />
    <BorderLine />
    <Contact />
    <Footer />
    <Links />
  </div>
}

export default App;
