import queryString from "query-string";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { searchTerm } = queryString.parse(location.search);

  return (
    <div className="h-screen flex items-center justify-center">
      {searchTerm ? (
        <p>Results for: {searchTerm}</p>
      ) : (
        <p>No search term provided.</p>
      )}
    </div>
  );
};

export default SearchResults;
