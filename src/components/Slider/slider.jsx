import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestiSlider = () => {
  const sliderRef = useRef();
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

  const goToPreviousSlide = () => {
    // Handle previous slide logic
  };

  const goToNextSlide = () => {
    // Handle next slide logic
  };

  const buttonStyle = {
    borderRadius: "50%",
    border: "none",
    backgroundColor: "transparent",
    fontSize: "24px",
    padding: "10px",
    cursor: "pointer",
  };
  return (
    <div style={{marginTop:"50px"}}>
      
      <Slider ref={sliderRef} {...settings}>
        <div className="slide-content" >
          <div className="item-wrapper">
            <div className="item-img">
              <Link to="/another-page">
            <Link to="/another-page">
              <img
                src="/images/th.jpg"
                alt="Slider Image"
                 style={{ height:"300px", width:"400px",objectFit: "cover", borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}
              />
              </Link>
              </Link>
            </div>
            <div className="content-wrapper bg-gray-200" style={{backgroundColor:"#fff", height:"300px", width:"400px",padding: "20px",overflow: "hidden",borderRadius: "0 0 25px 25px"}}>
              <h6
                className="item-subtitle mt-5  mbr-fonts-style  "
                style={{
                  textAlign: "center",
                  fontSize:"20px",
                }}
              >
                <strong>Fast X</strong>
              </h6>
              <h6 style={{
                  textAlign: "center",
                  
                }}>2023</h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 "
                style={{ textAlign: "center" }}
              >
                "Fast X" follows Dominic Toretto and his crew as they embark on
                a mission for the Agency in Rome, aiming to steal a crucial
                computer chip. Their task becomes perilous when they encounter a
                formidable adversary named Dante, driven by a thirst for
                vengeance against Dom due to his brother's demise. As Dante's
                sinister scheme unfolds, it places Dom's family, particularly
                his son Brian, in grave danger, propelling the team on a global
                quest. Faced with the imminent threat, Dom and his loyal crew
                must engage in a high-stakes battle to safeguard their loved
                ones and thwart Dante's malevolent intentions.
              </p>
              
            </div>
          </div>
        </div>
        <div className="slide-content ">
          <div className="item-wrapper">
            <div className="item-img">
              <Link to="/another-page">
              <img
                src="/images/Heart_of_Stone_2023_poster.jpg"
                alt="Slider Image"
                 style={{ height:"300px", width:"400px",objectFit: "cover", borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}
              />
              </Link>
            </div>
            <div className="content-wrapper bg-gray-200" style={{backgroundColor:"#fff", height:"300px", width:"400px",padding: "20px",overflow: "hidden",borderRadius: "0 0 25px 25px"}} >
              <h6
                className="item-subtitle  mbr-fonts-style  "
                style={{
                  textAlign: "center",
                  fontSize:"20px",
                }}
              >
                <strong>Hear of Stone</strong>
              </h6>
              <h6 style={{
                  textAlign: "center",
                  
                }}>2023</h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 "
                style={{ textAlign: "center" }}
              >
                "Heart of Stone" is a captivating spy thriller featuring Gal
                Gadot in the role of Rachel Stone, an exceptional operative
                affiliated with the enigmatic covert organization known as "The
                Charter." Assigned to a critical mission, Rachel infiltrates an
                MI6 squad helmed by Parker (Jamie Dornan) under the guise of a
                rookie agent. Her objective is to rescue their imperiled
                operation. As the story unfolds, Rachel confronts a ruthless
                cadre of assassins while gradually unveiling her concealed
                identity and remarkable proficiencies.
              </p>
              
            </div>
          </div>
        </div>
        <div className="slide-content ">
          <div className="item-wrapper">
            <div className="item-img">
              <Link to="/another-page">
              <img
                src="/images/transformer.jpg"
                alt="Slider Image"
                 style={{ height:"300px", width:"400px",objectFit: "cover", borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}
              />
              </Link>
            </div>
            <div className="content-wrapper bg-gray-200" style={{backgroundColor:"#fff", height:"300px", width:"400px",padding: "20px",overflow: "hidden",borderRadius: "0 0 25px 25px"}}>
              <h6
                className="item-subtitle  mbr-fonts-style  "
                style={{
                  textAlign: "center",
                  fontSize:"20px",
                }}
              >
                <strong>Transformers: Rise of the Beast</strong>
              </h6>
              <h6 style={{
                  textAlign: "center",
                  
                }}>2023</h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 "
                style={{ textAlign: "center" }}
              >
                Vigan is another beautiful destination in the Philippines that
                should not be missed. It is located in the Ilocos region and is
                known for its well-preserved Spanish colonial architecture. The
                city was declared a UNESCO World Heritage Site in 1999, and it's
                a perfect destination for those who want to experience the
                country's rich history and culture.
              </p>
              
            </div>
          </div>
        </div>
        <div className="slide-content"   >
          <div className="item-wrapper">
            <div className="item-img">
              <Link to="/another-page">
              <img
                src="/images/spider.jpg"
                alt="Slider Image"
                 style={{ height:"300px", width:"400px",objectFit: "cover", borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}
              />
              </Link>
            </div>
            <div className="content-wrapper bg-gray-200" style={{backgroundColor:"#fff", height:"300px", width:"400px",padding: "20px",overflow: "hidden",borderRadius: "0 0 25px 25px"}}>
              <h6
                className="item-subtitle  mbr-fonts-style  "
                style={{
                  textAlign: "center",
                  fontSize:"20px",
                }}
              >
                <strong>SpiderMan: Across the SpiderVerse</strong>
              </h6>
              <h6 style={{
                  textAlign: "center",
                  
                }}>2023</h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 "
                style={{ textAlign: "center" }}
              >
                Known for its stunning limestone cliffs, clear lagoons, and
                diverse marine life, Palawan Island is a must-visit destination
                for nature lovers. Don't miss the Underground River in Puerto
                Princesa, a UNESCO World Heritage Site, or the Bacuit
                Archipelago in El Nido. If you're visiting in March, join the
                locals in celebrating the colorful Pista Y Ang Kagueban
                Festival.
              </p>
              
            </div>
          </div>
        </div>
        <div className="slide-content ">
          <div className="item-wrapper">
            <div className="item-img">
              <Link to="/another-page">
              <img
                src="/images/flash.jpg"
                alt="Slider Image"
                 style={{ height:"300px", width:"400px",objectFit: "cover", borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}
              />
              </Link>
            </div>
            <div className="content-wrapper bg-gray-200" style={{backgroundColor:"#fff", height:"300px", width:"400px",padding: "20px",overflow: "hidden",borderRadius: "0 0 25px 25px",}}>
              <h6
                className="item-subtitle  mbr-fonts-style  "
                style={{
                  textAlign: "center",
                  fontSize:"20px",
                }}
              >
                <strong>The Flash</strong>
              </h6>
              <h6 style={{
                  textAlign: "center",
                  
                }}>2023</h6>
              <p
                className="mbr-text mbr-fonts-style mt-3 "
                style={{ textAlign: "center" }}
              >
                After aiding Bruce Wayne and Diana Prince in thwarting a robbery
                in Gotham City, Barry Allen revisits his childhood home and
                relives memories with his parents. He uses his Speed Force
                powers to travel back in time and prevent his mother's death,
                despite Bruce's warnings of the consequences. Accidentally
                altering the timeline, he seeks help from an older version of
                himself and teams up with alternate versions of his allies to
                face General Zod's invasion and complex temporal challenges,
                ultimately sacrificing his alternate self to restore the
                timeline and mend the past's impact on his present and future.
              </p>
              
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default DestiSlider;
