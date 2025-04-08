import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Home bileşenleri
import Header from "./pages/HomePage/Header/Header";
import HeaderBar from "./pages/HomePage/Header/HeaderBar";
import Banner from "./pages/HomePage/Banner/Banner";
import Category from "./pages/HomePage/Category/Category";
import NewEducation from "./pages/HomePage/NewEducation/NewEducation";
import PopularEducation from "./pages/HomePage/PopularEducation/PopularEducation";
import FeaturedEducation from "./pages/HomePage/FeaturedEducation/FeaturedEducation";
import Events from "./pages/HomePage/Events/EventSection";
import ImpactSection from "./pages/HomePage/ourTeams/ImpactSection";
import CareerGuide from "./pages/HomePage/Career/CareerGuide";
import NewsSection from "./pages/HomePage/NewsS/NewsSection";
import Communication from "./pages/HomePage/communication/Communication";
import Footer from "./pages/HomePage/NavBar/Footer";

// Yan bileşenler
import ScrollIndicator from "./pages/HomePage/SideNavBar/ScrollIndicator";
import SocialMediaIcons from "./pages/HomePage/SideNavBar/SocialMediaIcons";
import ScrollToTopButton from "./pages/HomePage/SideNavBar/ScrollToTopButton";
import SupportButton from "./pages/HomePage/SideNavBar/SupportButton";

// Sayfalar
import AboutUs from "./pages/AboutUs/AboutUs";

// CSS
import "./styles/global.css";

// Home bileşenlerini tek bir bileşen altında topla
const Home = () => {
  return (
    <>
      <Header />
      <HeaderBar />
      <Banner />
      <Category />
      <NewEducation />
      <PopularEducation />
      <FeaturedEducation />
      <Events />
      <ImpactSection />
      <CareerGuide />
      <NewsSection />
      <Communication />
      <Footer />
      <ScrollIndicator />
      <SocialMediaIcons />
      <ScrollToTopButton />
      <SupportButton />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
