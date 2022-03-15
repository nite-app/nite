import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import Page2 from "./screens/Page2.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
