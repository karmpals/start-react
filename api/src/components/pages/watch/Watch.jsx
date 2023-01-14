import "./watch.scss";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Watch = () => {
  const location = useLocation();
  // console.log(location);
  const movies = location.movies;
  const movie = useState();


  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <FaArrowLeft />
        </div>
      </Link>
      <video className="video" autoPlay controls src={movie.video} />
    </div>
  )
}

export default Watch;
