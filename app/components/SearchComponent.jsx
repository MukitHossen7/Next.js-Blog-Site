"use client";

import { useState } from "react";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <div>
        <input
          className="text-sm py-1 px-3 bg-gray-200 border border-gray-100 rounded-md text-gray-900"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchComponent;
