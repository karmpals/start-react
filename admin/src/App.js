import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";
import { useEffect, useState } from "react";
import axios from 'axios';
function App() {
  const MONTHS= ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const [userStats, setUserStats] = useState([]);

  // useEffect(()=>{
  //   const getStats = async ()=>{
  //     try {
        
  //       const res = await axios.get("/users/stats",{headers:{token:""},
  //     });
  //     setUserStats(res.data);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   };
  //   getStats();
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<UserList />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productsId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
