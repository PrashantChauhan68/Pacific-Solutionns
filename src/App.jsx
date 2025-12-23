import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CTAConsultation from "./components/CTASolution";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import DigitalAgencyHero from "./components/Digitalscreen";
import Footer from "./components/Footer";

import ClientFeedback from "./components/ClientFeedsback";
import Aboutus from "./pages/Aboutus";

import Internship from "./pages/Internship"; // ✅ ADD THIS
import StatsSection from "./components/StatsSection";
import News from "./pages/News";
import ProjectsSection from "./components/ProjectSection";





function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
       
        <Header />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Internship" element={<Internship/>}/>
          </Routes>
        </main>


        

          <CTAConsultation/>
          
        <Footer />
   
      </div>
    </Router>
  );
}

export default App;




