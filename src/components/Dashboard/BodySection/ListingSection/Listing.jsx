import React from 'react'
import './listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import img from '/images/images (1).png'
import img1 from '/images/gt.jpg'
// import img2 from '../../../Assets/images (8).png'
// import img3 from '../../../Assets/images (10).png'
import user1 from '/images/aldi.jpg'
import user2 from '/images/dadang.jpg'
import user3 from '/images/gilbert.jpg'
import user4 from '/images/aldi.jpg'

const Listing = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img1} alt="Image Name" />
          <h3>Movies</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Tv Shows</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Anime</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                28,556 Plant sold <br />
                <small>
                  26 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing