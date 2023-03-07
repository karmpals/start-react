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
import Login from "./components/pages/login/Login";
function App() {
  const user = false;
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <div className="container">
            <Sidebar />
      <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route exact path="/" element={ user ? (<Home />) : (<Login/>)} />
            <Route path="users" element={user ? (<UserList />): (<Login/>)} />
            <Route path="user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/movies" element={user ? (<ProductList />): (<Login/>)} />
            <Route path="/product/:productsId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
      </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
