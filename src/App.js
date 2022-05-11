import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";

import Home from "./screens/Home";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import Reset from "./screens/auth/Reset";
import Briefing from "./screens/auth/Briefing";
import Page2 from "./screens/Page2.js";
import Page3 from "./screens/Page3.js";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AlertProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/page2" element={<Page2 />} />
              <Route exact path="/page3" element={<Page3 />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/briefing" element={<Briefing />} />
          </Routes>
        </AlertProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
