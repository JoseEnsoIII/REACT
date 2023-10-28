import React from 'react';
import Navbar from '../../components/Header/navbar1';
import Similar from "../../components/section/Similar";
import Intro from "../../components/Cards/Intro_slider"
import TabbedHome from '../../components/compo/TabbedHome'
import Anime from "../../components/section/anime_section";
import Footer from '../../components/Footer/footer'
import SideBar from '../../components/Header/sidenav'
import Ads from "../../components/Ads/bottom-ads";
import PopUpAds from "../../components/Ads/popup-ads";
import SectionAds from "../../components/Ads/section-ads";

const TopMdbi = () => {
  return (
    <div style={{height:"100vh"}}>
      <Navbar/>
      <Intro />
          <TabbedHome />
          <Similar />
          <SectionAds />
          <Anime/>
      <SideBar />
      <PopUpAds />
      <Ads />
      <Footer/>
    </div>
  );
}

export default TopMdbi;
