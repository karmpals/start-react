import "./navbar.scss";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return ()=> (window.onscroll = null);
  }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <span>Homepage</span>
            <span>Movies</span>
            <span>Series</span>
            <span>New & Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
              <FaSearch className="icon"/> 
             <span>Kids</span> 
             <FaBell className="icon"/>
             <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="profile">
              <FaCaretDown className="icon"/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
