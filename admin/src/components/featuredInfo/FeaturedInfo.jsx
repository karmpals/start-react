import "./featuredInfo.css";
import React from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4% <FaArrowDown className="featuredicon neg"/></span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-1.4% <FaArrowDown className="featuredicon neg"/></span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">+2.4% <FaArrowUp className="featuredicon"/></span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
