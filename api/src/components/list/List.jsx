import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Listitem from "../listitem/Listitem";
import "./list.scss";

const List = () => {
const [isMoved, setIsMoved] = useState(false)
const [slideNumber, setSlideNumber] = useState(0)

  const listRef = useRef()
  const handleClick =(direction) =>{
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x-58
    if(direction === "left" && slideNumber>0){
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if(direction === "right" && slideNumber<5){
      setSlideNumber(slideNumber +1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <FaAngleLeft className="sliderArrow left" onClick={()=>handleClick("left")} style={{display:!isMoved && "none"}} />
        <div className="container" ref={listRef}>
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
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
