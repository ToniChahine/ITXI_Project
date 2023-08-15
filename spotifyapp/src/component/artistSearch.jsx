import '../App.css';
import '../css/artistSearch.css'
import React from 'react';
import SearchBar from './searchBar';
import SearchFunction from './searchFunction';
import SearchResultsList from './searchResultsList';

export default function ArtistSearch({searchKey,setSearchKeyy}) {
  const { artistFound, searchArtist } = SearchFunction();
  const link='/browsingArtist'
 
  return (
    <div style={{marginTop:'17%'}}>
        <SearchBar link={link} flag='1' artistFound={artistFound} searchKey={searchKey} setSearchKeyy={setSearchKeyy}  searchArtist={searchArtist}  />
          <div className='divContainer'>
            {artistFound && artistFound.length > 0 && searchKey.length >0&&
            <div className='divList'> 
              <SearchResultsList  results={artistFound} />
            </div>
          }
        </div>
    </div>
  )
}
