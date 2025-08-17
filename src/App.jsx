import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BannerSlider from "./components/BannerSlider";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import TopHeader from "./components/TopHeader";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian chạy (ms)
      once: false,
    });
  }, []);

  return (
    <div className="App font-Lexend">
      <TopHeader />
      <Header />
      <HeroSection data-aos="zoom-in" />
      <PromoSection data-aos="fade-up" />
      <BannerSlider data-aos="flip-left" />
    </div>
  );
}

export default App;
