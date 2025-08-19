import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import PromoSection from "../components/PromoSection";
import BannerSlider from "../components/BannerSlider";
import TourSection from "../components/TourSection";
import BlogSection from "../components/BlogSection";
import AOS from "aos";
import "aos/dist/aos.css";
const HomPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian chạy (ms)
      once: false,
    });
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <HeroSection />
      <PromoSection data-aos="fade-up" />
      <BannerSlider data-aos="flip-left" />
      <TourSection aos="fade-right" title="Tour Trong Nước" />
      <TourSection aos="fade-right" title="Tour Nước Ngoài" />
      <BlogSection data-aos="flip-left" />
    </div>
  );
};

export default HomPage;
