import "./sidebar.css"
import React from 'react'
import { FaRegChartBar, FaComments, FaInfoCircle, FaPoll, FaStore, FaBriefcase, FaChartLine, FaHome, FaRegCommentAlt, FaRegUser, FaRegEnvelope, FaRupeeSign, FaRegPlayCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const Sliderbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <FaHome className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <FaRegChartBar className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <FaChartLine className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <FaRegUser className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <FaRegPlayCircle className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <li className="sidebarListItem">
              <FaRupeeSign className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <FaPoll className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <FaRegEnvelope className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FaComments className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <FaRegCommentAlt className="sidebarIcon" />
              Message
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <FaBriefcase className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <FaRegChartBar className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <FaInfoCircle className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sliderbar
