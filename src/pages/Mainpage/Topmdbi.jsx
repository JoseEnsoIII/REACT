import React from "react";
import Navbar from "../../components/Header/navbar1";
import Intro from "../../components/Cards/Intro_slider";
import Footer from "../../components/Footer/footer";
import Ads from "../../components/Ads/bottom-ads";
import PopUpAds from "../../components/Ads/popup-ads";
//
import RatedMovie from "../../components/IMDB/Rated_movie";
import RatedAnime from "../../components/IMDB/Rated_anime";
import RatedSeries from "../../components/IMDB/rated_series";


const TopMdbi = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <Intro />
      <RatedMovie/>
      <RatedAnime/>
      <RatedSeries/>
      <Footer />
      <PopUpAds />
      <Ads />
      <PopUpAds/>  
    </div>
  );
};

export default TopMdbi;
