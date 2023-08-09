import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchFunction() {
  const [artistFound, setArtistFound] = useState([]);

  async function searchArtist(searchKey) {
    if (searchKey.length > 0) {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          params: {
            q: searchKey,
            type: "artist",
          }
        });

        var artists = data.artists.items;
        localStorage.setItem('artistID', data.artists.items[0].id);
        setArtistFound(artists.filter(item => item.name.toLowerCase().includes(searchKey.toLowerCase())));
    console.log(artists)    
    } catch {
        console.error('Error while fetching data');
      }
    } else {
     return
    }
  }

  return { artistFound, searchArtist };
}
