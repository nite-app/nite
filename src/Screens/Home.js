import "../App.css";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="App" id="Home">
        <div className="sidebar">
          <Link to="register">register</Link>
        </div>
        <div className="maincontainer"></div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
