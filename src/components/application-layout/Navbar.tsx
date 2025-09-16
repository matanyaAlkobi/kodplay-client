import { Link } from "react-router";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="navbar-section">
      {/* Home */}
      <Link to="/home" className="navbar-item">
        <img src="/images/home.png" alt="Home" />
        <span>Home</span>
      </Link>
      {/* SearchBar בתוך Navbar */}
      <div className="navbar-item">
        <SearchBar />
      </div>
      {/* Take Picture */}
      <Link to="/take-picture" className="navbar-item">
        <img src="/images/photo_camera.png" alt="Take Picture" />
        <span>Take Picture</span>
      </Link>
    </nav>
  );
}
