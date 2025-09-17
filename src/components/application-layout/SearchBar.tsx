// SearchBar.tsx
import { useRef, useState } from "react";
import Playlist from "../Playlist";

export default function SearchBar() {
  const queryRef = useRef<HTMLInputElement>(null);
  const [mood, setMood] = useState<string | null>(null);

  return (

    <div>
      <input type="text" ref={queryRef} placeholder="Search..." />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (queryRef.current) {
            setMood(queryRef.current.value);
          }
        }}
      >
        🔍
      </button>

      {mood && <Playlist mood={mood} />}

    {/* <div className="searchbar-wrapper">
      <input
        type="text"
        ref={queryRef}
        placeholder="Type here..."
      />
      <img
        src="/images/search.png"
        alt="Search"
        onClick={handleSubmit}
        className="search-icon"
      /> */}

    {/* </div> */}
  </div>
  );
}
