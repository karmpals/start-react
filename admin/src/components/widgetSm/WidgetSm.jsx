import "./widgetSm.css";
 
import React from 'react'
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const WidgetSm = () => {
    const [newUsers, setNewUsers]= useState([]);

    useEffect(()=>{
        const getNewUsers = async ()=>{
            try {
                const res = await axios.get("/users?new=true",)
            } catch (err) {
                console.log(err);
            }
        }
    },[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <FaEye className="widgetSmIcon"/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <FaEye className="widgetSmIcon"/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <FaEye className="widgetSmIcon"/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <FaEye className="widgetSmIcon"/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <FaEye className="widgetSmIcon"/>
                Display
            </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
