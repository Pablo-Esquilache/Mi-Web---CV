import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/navigation/menu/menu";
import Home from "./components/sections/home/home";
import Education from "./components/sections/education/education";
import Experience from "./components/sections/experience/experience";
import Contact from "./components/sections/contact/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Menu />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/estudios" element={<Education />} />
          <Route path="/experiencia-laboral" element={<Experience />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
