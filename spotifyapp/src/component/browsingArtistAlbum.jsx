import React, { useEffect, useState,useRef} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/browsingArtistAlbum.css';
import '../App.css';

export default function BrowsingArtistAlbum() {
  
  const [albums, setAlbums] = useState([]);
  const isMounted = useRef('true');
 
  useEffect(() => 
  {
    if(isMounted.current){
      searchAlbum();
      const data=JSON.parse(localStorage.getItem('album'))
      if(data){
        setAlbums(data) 
      }
    }
    return () => {
      isMounted.current = '';
    };
  }, []); 

  async function searchAlbum() {
      try {
        var artistID = localStorage.getItem('artistID');
        
        var artistAlbum = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/albums`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          params: {
            include_groups: 'album',
            market: 'US',
          },
        });
        setAlbums(artistAlbum.data.items);
        localStorage.setItem('album',JSON.stringify(artistAlbum.data.items))
      }
      catch (error) {
        console.error('Error occurred:', error);
      }
    }
 
  return (
    <>
      <div className='divAlbumContainer'>
        <div className='divAlbum'>
          <h1>{localStorage.getItem('Name')}</h1>
          <h5 style={{color:'grey'}}>Albums</h5>
        </div>
      </div>
      <section className='section-center'>
        {albums.map((album) => 
          <article className='single-div' key ={album.id} >
            <img src={getImage(album)} className='img' alt={album.id}/>
            <div>
              <h5 style={{ padding:'10px 0px 0px 30px'}}>{album.name}</h5>
              <div className='single-div-detail' style={{padding:'0px 0px 0px 30px'}}>
                {artistNames(album.artists)}</div>
              <div className='single-div-detail' style={{padding:'20px 0px 0px 30px'}}>{album.release_date}</div>
              <div className='single-div-detail' style={{padding:'0px 0px 10px 30px'}}>{album.total_tracks} tracks </div>
            </div>
            <a href={album.external_urls.spotify} className='spotify-link'><footer>Preview on Spotifier</footer></a>
          </article>
        )}
      </section>
    </>
    
  );
  function artistNames(artists){
    let h='';
    for (let i = 0; i < artists.length; i++) {
      i<artists.length-1 ? h+= artists[i].name+', ':h+=artists[i].name
    } 
    return h
  }
    
  function getImage(album) {
    try {
      return album.images[0].url;
    } catch {
      return 'image-not-found.jpg';
    }
  }

}

