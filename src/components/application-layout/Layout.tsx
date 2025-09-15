import { Outlet } from "react-router";
import logo from "../../assets/images/logo.png";
import DisplayImage from "../DisplayImage";
import Navbar from "./Navbar";
import "../../styles/layout.css"

export default function Layout() {
  return (
    <>
      <div>
        <header>
          <div className="logo-section">
            <DisplayImage imgSrc={logo} alt="app logo" />
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
