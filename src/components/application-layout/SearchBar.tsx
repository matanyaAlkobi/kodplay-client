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
    <div>
      <input type="text" ref={queryRef} placeholder="Search..." />
      <button onClick={handleSubmit}>🔍</button>
    </div>
  );
}
