import { Outlet } from "react-router";
import logo from "../../assets/images/logo.jpeg";
import DisplayImage from "../DisplayImage";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <div>
        <header>
          <DisplayImage imgSrc={logo} alt="app logo" />
          <Navbar/>
          <button>my profile</button>
        </header>
        <Outlet/>
      </div>
    </>
  );
}
