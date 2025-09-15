import { useState } from "react";
import { Link } from "react-router";
import SearchBar from "./SearchBar";

export default function Navbar() {
const [searchQuery, setSearchQuery] = useState<string>("");
  console.log(searchQuery)
  const handleSearch = (query:string)=>{
    setSearchQuery(query)
    console.log("Search query received from child:",query)
    // כאן צריך להוסיף ניווט לדף או לשלוח בקשה לחיפוש  בשרת
  }

  
  return (
    <nav>
      <Link className="navbar-link" to="/home">
        Home
      </Link>
      <SearchBar onSearch={handleSearch} />

       {/* פה  צריכה להיכנס קומפוננטה של  צילום  תמונה
       או פשוט לעשות  ניווט  לדף     לקיחת תמונה */}
       <button>Take a picture</button>
    </nav>
  );
}
