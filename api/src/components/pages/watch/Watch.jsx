import "./watch.scss";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviesService from "../../../services/movies";

const Watch = () => {
  
  const params = useParams();
  // console.log(location);
  const movieId = params.movieId;
  const[movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await MoviesService.getMovieById(movieId);
      setMovie(response);
    }
    fetchMyAPI();
    
 }, [])


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
