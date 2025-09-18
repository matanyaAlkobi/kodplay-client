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
            <a
              className="cws-button"
              href="https://chromewebstore.google.com/search/%D7%A4%D7%99%D7%99%D7%A1%20%D7%98%D7%95%20%D7%9E%D7%99%D7%95%D7%96%D7%99%D7%A7%20-%20Face%20To%20Music?hl=iw&authuser=2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פתח את חנות התוספים של כרום עבור Face To Music"
              title="פתח בחלונית חדשה"
            >
              {/* Chrome Web Store icon (inline SVG for crisp rendering) */}
              <svg
                className="cws-icon"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ea4335" />
                    <stop offset="50%" stop-color="#fbbc05" />
                    <stop offset="100%" stop-color="#34a853" />
                  </linearGradient>
                </defs>
                <path fill="#E0E0E0" d="M7 10a4 4 0 0 1 4-4h26a4 4 0 0 1 4 4v26a8 8 0 0 1-8 8H15a8 8 0 0 1-8-8V10z"/>
                <rect x="6" y="8" width="36" height="8" rx="4" fill="#F5F5F5"/>
                <path d="M11 8h26a4 4 0 0 1 4 4v2H7v-2a4 4 0 0 1 4-4z" fill="#ffffff" opacity=".65"/>
                <circle cx="24" cy="31" r="12" fill="url(#grad)"/>
                <circle cx="24" cy="31" r="6.5" fill="#4285f4" stroke="#ffffff" stroke-width="2"/>
              </svg>
              <span className="cws-text">חנות כרום</span>
            </a>

            <Link to="/profile" className="navbar-item profile-link">
              <img src="/images/profile-icon.png" alt="Profile" />
              <span>Profile</span>
            </Link>
          </div>
        </header>
        <div className="outlet-arae">
          <Outlet />
        </div>
      </div>
    </>
  );
}

