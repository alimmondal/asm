import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Narration from "./hscItems/Narration";
import Tense from "./allItems/Tense";
import Paragraph from "./composition/Paragraph";
import Application from "./composition/Application";
import Essays from "./composition/Essays";
import TagQuestion from "./sscItems/TagQuestion";
import Article from "./hscItems/Article";
import Verbs from "./hscItems/Verbs";

// Example components for different content
// const NarrationContent = () => <p>This is narration content.</p>;
// const TenseContent = () => <p>This is tense content.</p>;

// Define mockData with components
const mockData = [
  {
    id: 1,
    title: "Tag Tags Question",
    content: <TagQuestion />,
  },
  {
    id: 1,
    title: "Article the",
    content: <Article />,
  },
  {
    id: 1,
    title: "Verbs, right form of verbs",
    content: <Verbs />,
  },
  {
    id: 2,
    title: "Advanced Narration Techniques",
    content: <Narration />,
  },
  {
    id: 3,
    title: "Understanding Tense",
    content: <Tense />,
  },
  {
    id: 4,
    title: "Paragraph",
    content: <Paragraph />,
  },
  {
    id: 5,
    title: "Application",
    content: <Application />,
  },
  {
    id: 6,
    title: "Composition",
    content: <Essays />,
  },
  // Add more items with different components
];

type ResultItem = {
  id: number;
  title: string;
  content: JSX.Element;
};

const SearchResults = () => {
  const location = useLocation();
  const { searchTerm } = queryString.parse(location.search);
  const [results, setResults] = useState<ResultItem[]>([]);

  useEffect(() => {
    if (typeof searchTerm === "string") {
      const filteredResults = mockData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Results for: {searchTerm}</h1>
      <div>
        {results.length > 0 ? (
          results.map((item: any) => (
            <div key={item.id}>
              {/* <h2>{item.title}</h2> */}
              <div>{item.content}</div>{" "}
              {/* Render the component or JSX content */}
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;

// import queryString from "query-string";
// import { useLocation } from "react-router-dom";

// const SearchResults = () => {
//   const location = useLocation();
//   const { searchTerm } = queryString.parse(location.search);

//   return (
//     <div className="h-screen flex items-center justify-center">
//       {searchTerm ? (
//         <p>Results for: {searchTerm}</p>
//       ) : (
//         <p>No search term provided.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
