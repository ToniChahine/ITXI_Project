import React from 'react';
import SearchBar from './searchBar';
import '../App.css';
export default function ArtistSearch({searchKey,setSearchKeyy}) {
  
  return (
    <div>
        <SearchBar link='/browsingArtist' flag='1' searchKey={searchKey} setSearchKeyy={setSearchKeyy}/>
    </div>
  )
}
