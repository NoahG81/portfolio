import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Parcours } from "./components/Parcours";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Parcours />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
