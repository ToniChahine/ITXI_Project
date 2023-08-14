import React,{useEffect} from 'react'
import SearchBar from './searchBar'
import '../App.css';
import SearchFunction from './searchFunction';
import '../css/searchBar.css';
  
export default function BrowsingArtist({searchKey,setSearchKeyy,artistName,setArtistNamee}) { 
  const { artistFound, searchArtist } = SearchFunction();
  useEffect(()=>{
    searchArtist(searchKey);
  },[])
  
  return (
    <div>
        <SearchBar link='/browsingArtistAlbum' flag='' artistFound={artistFound}
        searchKey={searchKey} setSearchKeyy={setSearchKeyy} searchArtist={searchArtist}
        artistName={artistName} setArtistNamee={setArtistNamee}/>
    </div>
  )
}

 