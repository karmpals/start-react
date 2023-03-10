import { useEffect } from "react";
import { useState } from "react";
import { FaPlay, FaPlus, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import "./listitem.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Listitem = ({index, item}) => {
    const[isHovered, setIsHovered] = useState(false);
    const[movie, setMovie] = useState({});

    useEffect(()=>{
      const getMovie = async()=>{
        try {
          const res = await axios.get("http://localhost:8800/client/movies/find/" + item,{
            headers: {
              token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBkZTNkNWQ0ODAxZGVmODk5MTUyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODE3NzYzMiwiZXhwIjoxNjc4NjA5NjMyfQ.ZGc0UH7TZyI8saXLo5HiRiqBgAB0DrkB2EsjAWghNGM"
            },
          });
          setMovie(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      getMovie()
    },[item]);
  return (
    <Link to={`/watch/${movie._id}`}>
    <div className="listitem" 
    style={{left: isHovered && index * 225 -50 + index *2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>
      <img src={movie.img}alt="" />
      {isHovered && ( <>
      <video src={movie.trailer}autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          <FaPlay className="icon"/>
          <FaPlus className="icon"/>
          <FaThumbsUp className="icon"/>
          <FaThumbsDown className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>{movie.duration}</span>
          <span className="limit">{movie.limit}</span>
          <span>{movie.year}</span>
        </div>
        <div className="desc">
         {movie.desc}
        </div>
        <div className="genre">{movie.genre}</div>
      </div> 
      </>
      )}
    </div>
    </Link>
  )
}

export default Listitem;
