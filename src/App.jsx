import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/header";
import Footer from "./layout/footer";
import Contact from "./pages/contactUs";
import Home from "./pages/home/index";
import TermsConditions from "./pages/terms&Condition";
import PrivacyPolicy from "./pages/privacy&Policy";
import AboutUs from "./pages/aboutUs";
import CookiesPolicy from "./pages/cookiesPolicy";
import ScrollToTop from "./components/ScrollToTop";
import AppDevelopement from "./pages/appDevelopement";
import WebDevelopement from "./pages/webDevelopment";
import DigitalMarketing from "./pages/digitalMarketing";
import SEO from "./pages/seo";
import Technology from "./pages/technology";
import Services from "./pages/services";
import AboutUs2 from "./components/AboutUs/AboutUs";
import AllServices from "./components/AllServices/AllServices";
import Project from "./pages/ourProject";
import FortuneTalk from "./components/Portfolio/PakagesOfAllProject/FortuneTalk/FortuneTalk";
import Gaming from "./components/Portfolio/PakagesOfAllProject/Gaming/Gaming";
import EcommerceLanding from "./components/Portfolio/PakagesOfAllProject/Ecommerce/Ecommerce";
import JewelryLanding from "./components/Portfolio/PakagesOfAllProject/jwellery";
import Astrology from "./components/Portfolio/PakagesOfAllProject/Astrology";
import RealEstate from "./components/Portfolio/PakagesOfAllProject/RealEstate";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/app-Development" element={<AppDevelopement />} />
        <Route path="/web-Development" element={<WebDevelopement />} />
        <Route path="/Digital-Marketing" element={<DigitalMarketing />} />
        <Route path="/SEO-Services" element={<SEO />} />
        <Route path="/Technology-Stack" element={<Technology />} />
        <Route path="/Services" element={<AllServices />} />
        <Route path="/AboutUs2" element={<AboutUs2 />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/FortuneTalk" element={<FortuneTalk />} />
        <Route path="/FortuneTalk" element={<FortuneTalk />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/EcommerceLanding" element={<EcommerceLanding />} />
        <Route path="/JewelryLanding" element={<JewelryLanding />} />
        <Route path="/Astrology" element={<Astrology />} />
        <Route path="/RealEstate" element={<RealEstate />} />
 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
