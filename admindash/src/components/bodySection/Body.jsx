import React from 'react'
import "./body.scss"
import Top from '../TopSection/Top'
import Listing from '../bodySection/Listing Section/Listing'
import Activity from '../bodySection/Activity Section/Activity'
const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>
      <div className="bottom flex">
        <Listing/>
        <Activity/>
      </div>
    </div>
  )
}

export default Body