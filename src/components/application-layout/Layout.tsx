import { Link, Outlet, useLocation, useNavigate } from "react-router";
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
            <img src="/images/logo.png" alt="app logo" />
          </div>
          <div className="navbar-section">
            <Navbar />
          </div>
          <div className="actions-section">
            <Link to="/profile" className="navbar-item profile-link">
              <img src="/images/profile-icon.png" alt="Profile" />
              <span>Profile</span>
            </Link>
            <a
              className="cws-button"
              href="https://chromewebstore.google.com/search/%D7%A4%D7%99%D7%99%D7%A1%20%D7%98%D7%95%20%D7%9E%D7%99%D7%95%D7%96%D7%99%D7%A7%20-%20Face%20To%20Music?hl=iw&authuser=2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פתח את חנות התוספים של כרום עבור Face To Music"
              title="פתח בחלונית חדשה"
            >
              <div className="web-store-section">
              <img className="web-store" src="/images/web_store.png" alt="" />
              <span className="cws-text">Web store</span>
              </div>
            </a>
          </div>
        </header>
        <div className="outlet-arae">
          <Outlet />
        </div>
      </div>
    </>
  );
}
