import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import Page2Screen from "./screens/Page2Screen.js";
import Page3Screen from "./screens/Page3Screen.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PrivateRoute />}> */}
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/page2" element={<Page2Screen />} />
        <Route exact path="/page3" element={<Page3Screen />} />
        {/* </Route> */}
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
