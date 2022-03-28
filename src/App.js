import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Register from "./screens/auth/RegisterScreen";
import Login from "./screens/auth/LoginScreen";
import Page2 from "./screens/Page2.js";
import Page3 from "./screens/Page3.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
