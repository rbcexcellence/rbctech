import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Datenschutz from "./pages/Datenschutz";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>

      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services.html" element={<Services />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />

          <Route path="/impressum" element={<Impressum />} />
          <Route path="/impressum.html" element={<Impressum />} />

          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/datenschutz.html" element={<Datenschutz />} />

          <Route path="/404.html" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
