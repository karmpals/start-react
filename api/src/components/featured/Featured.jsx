import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { FaInfoCircle, FaPlay } from "react-icons/fa"
import "./featured.scss";
import {Link} from 'react-router-dom';

const Featured = ({type}) => {
    const [content, setContent] = useState({});

    useEffect(()=>{
       const getRandomContent = async()=>{
        try {
            const res = await axios.get(`http://localhost:8800/client/movies/random?type=${type}`,{
                headers: {
                  token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBkZTNkNWQ0ODAxZGVmODk5MTUyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODE3NzYzMiwiZXhwIjoxNjc4NjA5NjMyfQ.ZGc0UH7TZyI8saXLo5HiRiqBgAB0DrkB2EsjAWghNGM"
                },
              });
            setContent(res.data[0]);
        } catch (err) {
            console.log(err);
        }
       } 
       getRandomContent(); 
    },[type]);
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historycal">Historycal</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src={content.img}alt="" />
        <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className="desc">{content.desc}</span>
            <div className="buttons">
                <Link to={`/watch/${content._id}`} className="link">
                <button className="play">
                    <FaPlay />
                    <span>Play</span>
                </button>
                </Link>
                <button className="more">
                <FaInfoCircle />
                    <span>Info</span>
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
