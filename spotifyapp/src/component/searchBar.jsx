import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/searchBar.css';

export default function SearchBar({link,flag,searchArtist, searchKey,setSearchKeyy,artistFound,artistName,setArtistNamee}) {
  
  const navigate=useNavigate();
  
  function searchAlbum(artistName){
    setArtistNamee(artistName)
    console.log(artistName)
    navigate(link);
  }

  function goToBrowsingArtist(){
    setSearchKeyy(searchKey)
    navigate(link);
  }
  function onchange(e)
  {
    setSearchKeyy(e.target.value);
  }
  return (
    <div > 
      {!flag?
      (<div  className='divContainer' style={{minHeight:'20vh'}}>
        <div className='divSearch'>
          <input className='divSearchInput' placeholder='Search for an artist...'  value={searchKey} onChange={onchange} />
          <button className='divSearchButton' onClick={searchArtist}>
            <img className='divSearchLogo' src="./photo/loop-logo.jpeg" alt="logggo"/>
          </button>
        </div>
      </div>)
      :(
      <div  className='divContainer' style={{minHeight:'80vh'}}>
        <div className='divSearch'>
          <input className='divSearchInput' placeholder='Search for an artist...'  onChange={onchange} />
          <button className='divSearchButton' onClick={goToBrowsingArtist}>
            <img className='divSearchLogo' src="./photo/loop-logo.jpeg" alt="loop-logo"/>
          </button>
        </div>
     </div>)
      }
      {artistFound&&
        <section className='section-center'>
          {artistFound.map((artist)=>
            <article className='single-div'  style={{cursor:'pointer'}} onClick={()=>searchAlbum(artist.name)} key ={artist.id}>
            <img  src={getImage(artist)} className='img' alt={artist.id}/>
            <div>
              <h5  style={{padding:'10px 0px 0px 30px'}}>{artist.name}</h5>
              <div className='followers' style={{padding:'0px 0px 0px 30px'}}>{numberWithCommas(artist.followers.total)} followers</div>
              {rating(artist.popularity)}
            </div>
          </article>
          )}
        </section>
      }
    </div> 
  )

  function getImage(artist) {
    try{
      return artist.images[0].url;
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
            
  function rating ( popularity ) {
    const maxStars = 5;
    const filledStars = Math.ceil((popularity / 100)*maxStars);

    return (
      <div style={{padding:'20px 0px 20px 30px'}}>
        {[...Array(maxStars)].map((_, index) => (
          <img key={index} className="star" style={{
           width:'20px',
           height:'15px'
          }} 
          src={index < filledStars ? "./photo/star-filled.jpg" : "./photo/star.jpg"} 
          alt={"star"+index}/>
        ))}
      </div>
    );
  }
}
