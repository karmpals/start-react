import "./watch.scss";
import {FaArrowLeft} from "react-icons/fa";
const Wacth = () => {
  return (
    <div className="watch">
        <div className="back">
            <FaArrowLeft/>
            Home
        </div>
        <video className="video" autoPlay progress controls src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=1398&oauth2_token_id57447761"/>
    </div>
  )
}

export default Wacth
