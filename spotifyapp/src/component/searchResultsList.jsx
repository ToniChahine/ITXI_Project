import "../css/searchResultsList.css";
import SearchResult from "./searchResult";

export default function SearchResultsList ({ results ,link,setSearchKeyy,searchKey}) {

    return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} link={link} searchKey={searchKey} setSearchKeyy={setSearchKeyy} key={id} />;
      })}
    </div>
  );
};