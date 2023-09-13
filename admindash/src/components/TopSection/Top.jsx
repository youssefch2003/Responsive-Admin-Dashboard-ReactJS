import React from 'react'
import "./top.scss"
// imported Icons ========
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle2} from 'react-icons/tb'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BsArrowRight} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
// imported Image ====>
import admin from '../assets/user2.png'
import plant0 from '../assets/plant0.png'
import video from '../assets/tree.mp4'
const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcom to Planti.</h1>
          <p>Hello Youssef,Welcome back!</p>
        </div>

        <div className="searchBar flex">
           <input type="text" placeholder='Search dashboard' />
            <BiSearchAlt className='icon'/>
        </div>

        <div className="adminDiv flex">
              <TbMessageCircle2 className='icon'/>
              <IoIosNotificationsOutline  className='icon'/>
        </div>
        <div className="adminImage">
          <img src={admin} alt="AdminImage" />
        </div>
      </div> 


      <div className="cardSection flex">

           
          <div className="rightCard flex">
            <h1>Create and sell extraordinary products</h1>
            <p>The world's fast growing industry today are natural made products!</p>
           


          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent"> Top Sellers</button>
         </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>

          </div>

          <div className="leftCard flex">
                <div className="main flex"> 
                  <div className="textDiv">
                    <h1>My Stat</h1>
                      <div className="flex">
                            <span>
                              Today <br /> <small>4 Orders</small>
                            </span>
                            <span>
                              This Month <br /> <small>128 Orders</small>
                            </span>
                      </div>
                      <span className="flex link">
                        Go to my Orders <BsArrowRight className='icon'/>
                      </span>
                    </div>
                    <div className="imgDiv">
                      <img src={plant0} alt="" />
                    </div>
                    {/* we goona use it  */}
                    <div className="sideBarCard">
                          <BsQuestionCircle className="icon"/>
                          <div className="cardContent">
                            <div className="circle1"></div>
                            <div className="circle2"></div>

                            <h3>Help Center</h3>
                            <p>Having Trouble in Planti, Please contact us for more questions</p>
                            <button className='btn'> Go to help center </button>
                          </div>
                    </div>
                </div>
          </div>
      </div>
        
</div>
  )
}

export default Top