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
import AlertPopup from "./components/AlertPopup";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      //Every page can access AuthContext variables without calling them every
      time
      <AuthProvider>
        <AlertProvider>
          <Routes>
            //user can access pages inside PrivateRoute only if they are logged
            in, otherwise redirect them to the login page
            <Route element={<PrivateRoute />}>
              <Route
                exact
                path="/"
                element={
                  <>
                    <AlertPopup />
                    <Home />
                  </>
                }
              />
              <Route
                exact
                path="/page2"
                element={
                  <>
                    <AlertPopup />
                    <Page2 />
                  </>
                }
              />
              <Route
                exact
                path="/page3"
                element={
                  <>
                    <AlertPopup />
                    <Page3 />
                  </>
                }
              />
            </Route>
            <Route
              exact
              path="/login"
              element={
                <>
                  <AlertPopup />
                  <Login />
                </>
              }
            />
            <Route
              exact
              path="/register"
              element={
                <>
                  <AlertPopup />
                  <Register />
                </>
              }
            />
            <Route
              exact
              path="/reset"
              element={
                <>
                  <AlertPopup />
                  <Reset />
                </>
              }
            />
            <Route
              exact
              path="/briefing"
              element={
                <>
                  <AlertPopup />
                  <Briefing />
                </>
              }
            />
          </Routes>
        </AlertProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
