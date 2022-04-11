import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import ResetScreen from "./screens/auth/ResetScreen";
import Page2Screen from "./screens/Page2Screen.js";
import Page3Screen from "./screens/Page3Screen.js";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/page2" element={<Page2Screen />} />
            <Route exact path="/page3" element={<Page3Screen />} />
          </Route>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/reset" element={<ResetScreen />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
