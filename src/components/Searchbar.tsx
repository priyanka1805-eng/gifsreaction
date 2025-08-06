import React from "react";

interface SearchbarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2"
      placeholder="Search..."
    />
  );
};

export default Searchbar;
