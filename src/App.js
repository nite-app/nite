import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import Page2Screen from "./screens/Page2Screen.js";
import Page3Screen from "./screens/Page3Screen.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/page2" element={<Page2Screen />} />
        <Route exact path="/page3" element={<Page3Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
