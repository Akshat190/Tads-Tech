import MainPage from "./pages/mainpage";
import AboutusPage from "./pages/aboutuspage"
import PortfolioPage from "./pages/portfoliopage"
import ServicePage from "./pages/servicespage"
import ContactPage from "./pages/contactpage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} excat />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
