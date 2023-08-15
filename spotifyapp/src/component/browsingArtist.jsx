import React,{useEffect,useRef} from 'react'
import SearchBar from './searchBar'
import SearchFunction from './searchFunction';
import '../App.css';
import '../css/searchBar.css';
  
export default function BrowsingArtist({searchKey,setSearchKeyy}) { 
  const { artistFound, searchArtist } = SearchFunction();
  const isMounted = useRef('true');
 
  useEffect(()=>{ 
    if(isMounted.current){
      searchArtist(searchKey);}
    return () => {
      isMounted.current = '';
    };
  },[])
  
  return (
    <div>
        <SearchBar link='/browsingArtistAlbum' artistFound={artistFound}
        searchKey={searchKey} setSearchKeyy={setSearchKeyy} searchArtist={searchArtist}
        />
    </div>
  )
}

 