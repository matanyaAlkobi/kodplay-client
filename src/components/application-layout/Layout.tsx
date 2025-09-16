import { Outlet, useLocation, useNavigate } from "react-router";
import DisplayImage from "../DisplayImage";
import Navbar from "./Navbar";
import "../../styles/layout.css";

import { useEffect } from "react";

export default function Layout() {
  const validUser = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (!validUser.state) {
      navigate("/");
    }
  }, []);


  return (
    <>
      <div>
        <header>
          <div className="logo-section">
            <DisplayImage imgSrc="/images/logo.png" alt="app logo" />
          </div>
          <div className="navbar-section">
            <Navbar />
          </div>
          <div className="profile-section">
            <button>my profile</button>
          </div>
        </header>
        <div className="outlet-arae">
          <Outlet />
        </div>
      </div>
    </>
  );
}
