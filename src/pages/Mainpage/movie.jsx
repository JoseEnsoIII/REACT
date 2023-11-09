import React, { useEffect } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../../components/Header/navbar1";
import Carousel from "../../components/compo/nukacarousel";
import TabbedHome from "../../components/compo/TabbedHome";
import FlexWrap from "../../components/Cards/multiplecard";
import Similar from "../../components/section/movie_section"
import Anime from "../../components/section/anime_section"
import SectionAds from "../../components/Ads/section-ads";
import Footer from '../../components/Footer/footer';
import Ads from "../../components/Ads/bottom-ads";
import PopUpAds from "../../components/Ads/popup-ads";

const MySlider = () => {
  // Renamed the locally defined Slider component
  useEffect(() => {
    AOS.init();
  }, []);

  

  return (
    <SlickSlider {...settings}>
      
    </SlickSlider>
  );
};

const Home = () => {
  useEffect(() => {
    document.title = "ReactFlix | Watch Movies";
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel/>
     <TabbedHome />
     <FlexWrap />
     <Similar/>
      <SectionAds/>
      <Anime/>
     <PopUpAds />
      <Ads />
      <PopUpAds/>  
      <Footer />
    </div>
  );
};

export default Home;
