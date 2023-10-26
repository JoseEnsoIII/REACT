import React from "react";
import TabbedHome from "../components/compo/TabbedHome";
import SideBar from "../components/Header/sidenav";
import SectionAds from "../components/Ads/section-ads";
import Navbar from "../components/Header/navbar1";
import Intro from "../components/Cards/Intro_slider";
import Similar from "../components/section/Similar";
import Footer from "../components/Footer/footer";

function MovieRecommendations() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <SideBar />
      <div style={{ flex: 1 }}>
        <Intro />
        <TabbedHome />
        <SectionAds />
        <Similar />
      </div>
      <Footer />
    </div>
  );
}

export default MovieRecommendations;
