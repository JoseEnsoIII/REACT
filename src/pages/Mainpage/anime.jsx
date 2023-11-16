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
import Similar from "../../componentsImport sectionSimilar"
import Anime from "../../componentsImport sectionanime_section"
import Ads from "../../components/Ads/bottom-ads";

//ads
import PopUpAds from "../../components/Ads/popup-ads";
import SectionAds from "../../components/Ads/section-ads";
import Footer from '../../components/Footer/footer';

const MySlider = () => {
  // Renamed the locally defined Slider component
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <SlickSlider {...settings}>
      
    </SlickSlider>
  );
};

const Home = () => {
  useEffect(() => {
    document.title = "ReactFlix | Watch Anime";
  }, []);

  return (
    <section
      className="slider4 mbr-embla cid-tEzwvrEiry"
      style={{ backgroundColor: "#8E95A5" }}
      id="slider4-2j"
    >
      <Navbar />
      <Carousel
        autoplay={true}
        wrapAround={true}
        speed={1000}
        slidesToShow={1}
      ></Carousel>
      
     <TabbedHome />
     <FlexWrap />
     <Similar/>
      <SectionAds/>
      <Anime/>
      <Footer />
      <PopUpAds />
      <PopUpAds/>  
      <Ads />
    </section>
  );
};

export default Home;
