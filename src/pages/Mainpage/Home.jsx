import React, { useEffect } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../../components/Header/navbar1";
import SideBar from "../../components/Header/sidenav";
import Carousel from "../../components/compo/nukacarousel";
import TabbedHome from "../../components/compo/TabbedHome";
import Trending from "../../components/SectionPage/AllTrending";
import Anime from '../../components/SectionPage/AnimeSection';
import ComingSoon from '../../components/SectionPage/Coming_Soon'
import Footer from "../../components/Footer/footer";

//ads
import Ads from "../../components/Ads/bottom-ads";
import PopUpAds from "../../components/Ads/popup-ads";


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

  return <SlickSlider {...settings}></SlickSlider>;
};

const Home = () => {
  useEffect(() => {
    document.title = "ReactFlix |  Home";
  }, []);

  return (
    <section
      className="slider4 mbr-embla cid-tEzwvrEiry"
      style={{ backgroundColor: "#8E95A5", width: "100vw", }}
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
     <Trending/>
     <Anime/>
     <ComingSoon/>
      <Footer />
      <Ads />
      <PopUpAds/>  
    </section>
  );
};

export default Home;
