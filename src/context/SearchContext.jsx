import { createContext, useState, useContext } from "react";

// 1. Create context OUTSIDE the component
export const SearchContext = createContext();

// 2. Provider component (renamed to avoid conflict)
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// 3. Custom hook for easy use
export const useSearch = () => useContext(SearchContext);
