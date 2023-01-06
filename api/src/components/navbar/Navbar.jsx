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
             <img src="https://media.istockphoto.com/photos/funky-young-girl-picture-id1224048781?b=1&k=20&m=1224048781&s=612x612&w=0&h=UK2nqXDO98a_0oHFrZ8tDaYAzf2D7iSoWB4n3rV6ZqM=" alt="" />
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
