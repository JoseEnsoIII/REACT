import React from "react";
import Navbar from "../../components/Header/navbar1";
import Intro from "../../components/Cards/Intro_slider";
import Footer from "../../components/Footer/footer";
import Ads from "../../components/Ads/bottom-ads";
import PopUpAds from "../../components/Ads/popup-ads";
//
import RatedMovie from "../../components/IMDB/Rated_movie";

const TopMdbi = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <Intro />
      <RatedMovie/>
      <Footer />
      <PopUpAds />
      <Ads />
    </div>
  );
};

export default TopMdbi;
