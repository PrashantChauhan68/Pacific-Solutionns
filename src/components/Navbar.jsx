import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;



