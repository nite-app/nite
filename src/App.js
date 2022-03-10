import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home";
import Register from "./Screens/Auth/Register";
import Login from "./Screens/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
