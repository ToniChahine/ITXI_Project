import React,{useEffect,useState} from 'react'
import SearchBar from './searchBar'
import axios from 'axios';
import '../App.css';
export default function BrowsingArtist({searchKey,setSearchKeyy,artistName,setArtistNamee}) { 
 
  const [artistFound,setArtistFound]=useState([]);
 
  useEffect(()=>{
    searchArtist();
  },[])

  async function searchArtist() {
    if (searchKey.length > 0) {
      try 
      {
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          params: {
            q: searchKey,
            type: "artist",
            limit:"20",
              
          }
        });
        var artists = data.artists.items;
        console.log(artists);
        setArtistFound(artists.filter(item => item.name.toLowerCase().includes(searchKey.toLowerCase())));
      }
      catch{
        console.error('Error while fetching data')
        return 
      }
    }  
    else{
      return
    }
  } 
  return (
    <div>
        <SearchBar link='/browsingArtistAlbum' flag='' artistFound={artistFound}
        searchKey={searchKey} setSearchKeyy={setSearchKeyy} searchArtist={searchArtist}
        artistName={artistName} setArtistNamee={setArtistNamee}/>
    </div>
  )
}

 