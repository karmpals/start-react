import { useState } from "react";
import { FaPlay, FaPlus, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import "./listitem.scss";

const Listitem = ({index}) => {
    const[isHovered, setIsHovered] = useState(false);
    const trailer = "https://www.youtube.com/watch?v=0gShIU_i7O0"
  return (
    <div className="listitem" 
    style={{left: isHovered && index * 225 -50 + index *2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>
      <img src="https://media.istockphoto.com/photos/funky-young-girl-picture-id1224048781?b=1&k=20&m=1224048781&s=612x612&w=0&h=UK2nqXDO98a_0oHFrZ8tDaYAzf2D7iSoWB4n3rV6ZqM=" alt="" />
      {isHovered && ( <>
      <video src={trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <FaPlay/>
          <FaPlus/>
          <FaThumbsUp/>
          <FaThumbsDown/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>2022</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos optio ipsa!
        </div>
        <div className="genre">Action</div>
      </div> </>
      )}
    </div>
  )
}

export default Listitem;
