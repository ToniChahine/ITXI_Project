import "../css/searchResult.css";
import { useNavigate } from 'react-router-dom';

export default function SearchResult  ({result,link,setSearchKeyy,artist}) {
  function getImage(result) {
    try{
      return result.images[0].url;
    }
    catch {
      return './photo/image-not-found.jpg'
    }
  }
  function numberWithCommas(number) {
    const numberString = number.toString();
    const [integerPart, decimalPart] = numberString.split('.');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formattedNumber = decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
    return formattedNumber;
  } 
  function searchAlbum(){
    localStorage.setItem('artistID',result.id);
    localStorage.setItem('Name',artist);
    navigate('/browsingArtistAlbum');
  }
    const navigate = useNavigate();
    return (
      
        <div className="result-content" onClick={()=>searchAlbum()}>
          <span>{artist}<br/>
            <div className='followers' >{numberWithCommas(result.followers.total)} {(result.followers.total==1)? 'follower':'followers' }</div>
          </span>
          <img src={getImage(result)} className="img" alt={result.id} />
        </div>
      
  );
};