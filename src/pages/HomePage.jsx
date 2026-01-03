import SmoothScroll from "../components/SmoothScroll";

import Achievement from "../components/Achievement";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import OurJourney from "../components/OurJourney";
import Services from "../components/Serivces";
import Tutorials from "../components/Tutorials";

const HomePage = () => {
  return (
    <SmoothScroll>
      <div
        className="pt-[72px] "
        style={{
          background: "linear-gradient(to right, #434343, #000000)",
        }}
      >
        <AppBar />
        <HeroSection />
        <OurJourney />
        <Achievement />
        <Services />
        <Tutorials />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default HomePage;
