import BannerSlider from "./components/BannerSlider";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <div className="App  font-Lexend">
      <TopHeader />
      <Header />
      <HeroSection />
      <PromoSection />
      <BannerSlider />
    </div>
  );
}

export default App;
