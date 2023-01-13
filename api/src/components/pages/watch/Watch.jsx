import "./watch.scss";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Wacth = () => {
  const location = useLocation();
  const movies = location.movies;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <FaArrowLeft />
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movies.video} />
    </div>
  )
}

export default Wacth
