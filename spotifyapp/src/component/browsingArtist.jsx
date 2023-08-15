import React,{useEffect} from 'react'
import SearchBar from './searchBar'
import SearchFunction from './searchFunction';
import '../App.css';
import '../css/searchBar.css';
  
export default function BrowsingArtist({searchKey,setSearchKeyy}) { 
  const { artistFound, searchArtist } = SearchFunction();
  let isMounted = true;
 
  useEffect(()=>{ 
    if(isMounted){
      searchArtist(searchKey);}
    return () => {
      isMounted = false;
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

 