import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Features from "./pages/Features";
import Extensions from "./pages/Extensions";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/features" element={<Features />} />
        <Route path="/extensions" element={<Extensions />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;