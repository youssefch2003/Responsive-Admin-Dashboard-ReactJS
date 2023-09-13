import React from 'react'
import "./activity.scss"
// Imported icons =====>
import {BsArrowRight} from 'react-icons/bs'
// Imported images =====>
import img from '../../assets/pexels-yusron-el-jihan-10513822.jpg'
import img1 from '../../assets/w2.jpg'
import img2 from '../../assets/user2.png'
import img3 from '../../assets/w1.jpg'
import img4 from '../../assets/pexels-hatice-baran-14783579.jpg'
const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRight className='icon'/>
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img} alt="" />
              <div className="customerDetails">
                <span className="name">Adam Martha</span>
                <small>Ordred a new plant</small>
              </div>
              <div className="duration">
                2 min ago
              </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img1} alt="" />
              <div className="customerDetails">
                <span className="name">Adam Martha</span>
                <small>Ordred a new plant</small>
              </div>
              <div className="duration">
                2 min ago
              </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img2} alt="" />
              <div className="customerDetails">
                <span className="name">Adam Martha</span>
                <small>Ordred a new plant</small>
              </div>
              <div className="duration">
                2 min ago
              </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img3} alt="" />
              <div className="customerDetails">
                <span className="name">Adam Martha</span>
                <small>Ordred a new plant</small>
              </div>
              <div className="duration">
                2 min ago
              </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img4} alt="" />
              <div className="customerDetails">
                <span className="name">Adam Martha</span>
                <small>Ordred a new plant</small>
              </div>
              <div className="duration">
                2 min ago
              </div>
        </div>
      </div>
    </div>
  )
}

export default Activity