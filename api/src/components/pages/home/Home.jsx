import Navbar from "../../navbar/Navbar";
import "./home.scss";
import Featured from "../../featured/Featured";
import List from "../../list/List";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async ()=>{
      try {
         const res = await axios.get(`lists ${type ? "type" +type: ""} ${genre ? "&genre=" + genre:""}`);
         setLists(res.data);
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    };
    
    getRandomLists();
  }, [type, genre])
  return (
    <div className='home'>
        <Navbar />
        <Featured  type={type}/>
        <List />
        <List />
        <List />
        <List />
    </div>
  )
}

export default Home
