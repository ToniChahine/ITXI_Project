import "../css/searchResultsList.css";
import SearchResult from "./searchResult";

export default function SearchResultsList ({ results }) {

    return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult artist={result.name} result={result}  key={id} />;
      })}
    </div>
  );
}; 