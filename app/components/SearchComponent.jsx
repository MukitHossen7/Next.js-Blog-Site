"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParams = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParams}`;
    router.push(url);
  }, [search]);
  return (
    <div>
      <div>
        <input
          className="text-sm py-1 px-3 bg-gray-200 border border-gray-100 rounded-md text-gray-900"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchComponent;
