import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPopup from "./components/RegisterPopup";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Placements from "./pages/Placements";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <TopBar />
      <Navbar />
      <RegisterPopup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;