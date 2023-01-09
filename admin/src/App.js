import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
function App() {
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
