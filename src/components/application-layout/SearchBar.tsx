import { useRef } from "react";

type SearchBarProps = {
  onSearch?: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const queryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (onSearch && queryRef.current) {
      onSearch(queryRef.current.value);
      queryRef.current.value = "";
    }
  };

  return (
    <div className="searchbar-wrapper">
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
      />
    </div>
  );
}
