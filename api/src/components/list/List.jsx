import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Listitem from "../listitem/Listitem";
import "./list.scss";

const List = () => {
  const listRef = useRef()
  const handleClick =(direction) =>{
    let distance = listRef.current.getBoundingClientRect().x-58
    if(direction === "left"){
      listRef.current.style.transform = 'translateX(${230 + distance}px)'
    }
    if(direction === "right"){
      listRef.current.style.transform = 'translateX(${-230 + distance}px)'
    }
  }
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <FaAngleLeft className="sliderArrow left" onClick={()=>handleClick("left")}/>
        <div className="container" ref={listRef}>
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
        </div>
        <FaAngleRight className="sliderArrow right" onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}

export default List
