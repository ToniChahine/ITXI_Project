import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function SearchBar({link,flag,searchArtist, searchKey,setSearchKeyy,artistFound}) {
 
  const navigate=useNavigate();
  
  function searchAlbum(artistName,id){
    localStorage.setItem('artistID',id);
    localStorage.setItem('Name',artistName);
    navigate(link);
  }

  function onchange(e)
  {
    setSearchKeyy(e.target.value);
    searchArtist(e.target.value);
  }
  return (
    <div > 
      <div  className='divContainer' style={{minHeight:'20vh'}}>
        <div className='divSearch'>
         <div className="input-wrapper">
          <input className='divSearchInput' placeholder='Search for an artist...'  value={searchKey} onChange={onchange} />
         </div>
        </div>
      </div>
      
        <section className='section-center'>
          {artistFound.map((artist)=>
            <article className='single-div'  style={{cursor:'pointer'}} onClick={()=>searchAlbum(artist.name,artist.id)} key ={artist.id}>
            <img  src={getImage(artist)} className='img' alt={artist.id}/>
            <div>
              <h5  style={{padding:'10px 0px 0px 30px'}}>{artist.name}</h5>
              <div className='followers' style={{padding:'0px 0px 0px 30px'}}>{numberWithCommas(artist.followers.total)} {(artist.followers.total===1)? 'follower':'followers'  }</div>
              {rating(artist.popularity)}
            </div>
          </article>
          )}
        </section>
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
