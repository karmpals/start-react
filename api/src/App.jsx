import "./App.scss";
import Watch from "./components/pages/watch/Watch";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login"
import Register from "./components/pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ user ? (<Home />) : (<Register/>)} />
        <Route path="/register" element={!user ? (<Register />) : (<Home/>)} />
        <Route path="/login" element={!user ? (<Login />) : (<Home/>)} />
        <Route path="/watch" element={user ? (<Watch />) : (<Register/>)} />
        <Route path="/movies" element={user ? (<Home type="movies" />) : (<Register/>)} />
        <Route path="/series" element={user ? (<Home type="series" />) : (<Register/>)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
