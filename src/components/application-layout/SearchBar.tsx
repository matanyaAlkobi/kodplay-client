// SearchBar.tsx
import { useRef, useState } from "react";
import Playlist from "../Playlist";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mood, setMood] = useState<string | null>(null);

  const submit = () => {
    if (inputRef.current) {
      const value = inputRef.current.value.trim();
      if (value) setMood(value);
    }
  };

  return (
    <form
      className="searchbar searchbar--inline-icon"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <button
        type="submit"
        className="search-icon-button"
        aria-label="Search"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <input
        ref={inputRef}
        type="search"
        className="search-input"
        placeholder="חיפוש..."
        aria-label="Search"
      />

      {mood && <Playlist mood={mood} />}
    </form>
  );
}
