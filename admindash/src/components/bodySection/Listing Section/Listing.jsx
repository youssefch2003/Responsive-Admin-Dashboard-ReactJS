import React from 'react'
import "./listing.scss"

import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
// imported Image ====>
import img0 from '../../assets/images22.jpg'
import img1 from '../../assets/plant0.png'
import img2 from '../../assets/plant1.jpg'
import img3 from '../../assets/pexels-ehsan-ahmadnejad-3401161.jpg'
import img4 from '../../assets/w1.jpg'
import img5 from '../../assets/w2.jpg'
import img6 from '../../assets/user2.png'
import img7 from '../../assets/pexels-hatice-baran-14783579.jpg'
const Listing = () => {
  return (
<div className="listingSection">
      <div className="heading flex">
          <h1>My Listing</h1>
          <button className='btn flex'>
            See All <BsArrowRight className='icon' />
          </button>
      </div>
      
      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img0} alt="" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img1} alt="" />
          <h3>Coffee plant</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img2} alt="" />
          <h3>button fern</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img3} alt="" />
          <h3>fake plant</h3>
        </div>
      </div>

      <div className="sellers flex">
          <div className="topSellers">
            <div className="heading flex">
              <h3>Top Sellers</h3>
              <button className='btn flex'>
              See All <BsArrowRight className='icon' />
            </button>
            </div>

            <div className="card flex">
              <div className="users">
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img4} alt="" />
                <img src={img6} alt="" />
              </div>
              <div className="cardText">
                <span>
                  14.555 Plant Sold <br />
                  <small>
                    21 Sellers <span className="date">7 Days</span>
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="featuredSellers">
            <div className="heading flex">
              <h3> featured Sellers</h3>
              <button className='btn flex'>
              See All <BsArrowRight className='icon' />
            </button>
            </div>

            <div className="card flex">
              <div className="users">
                <img src={img7} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img4} alt="" />
              </div>
              <div className="cardText">
                <span>
                  28.555 Plant Sold <br />
                  <small>
                    29 Sellers <span className="date">31 Days</span>
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