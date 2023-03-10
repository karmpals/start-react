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
         const res = await axios.get(`http://localhost:8800/client/lists${type ? "?type=" +type: ""} ${genre ? "&genre=" + genre:""}`,
         {
          headers:{
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBkZTNkNWQ0ODAxZGVmODk5MTUyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODE3NzYzMiwiZXhwIjoxNjc4NjA5NjMyfQ.ZGc0UH7TZyI8saXLo5HiRiqBgAB0DrkB2EsjAWghNGM"
          }
         });
         setLists(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='home'>
        <Navbar />
        <Featured  type={type}/>
        {lists.map((list, index)=>(
          <List key={index} list={list} />
        ))}
    </div>
  )
}

export default Home
