import queryString from "query-string";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { searchTerm } = queryString.parse(location.search);

  return <div>Results for: {searchTerm}</div>;
};

export default SearchResults;
