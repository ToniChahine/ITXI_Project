import "../css/searchResult.css";
import { useNavigate } from 'react-router-dom';

export default function SearchResult  ({result,link,setSearchKeyy}) {
   
    function goToBrowsingArtist(result){
        setSearchKeyy(result)
        navigate(link);
    }
    const navigate = useNavigate();
    return (
    <div className="search-result" onClick={()=>goToBrowsingArtist(result)}>
      {result}
    </div>
  );
};