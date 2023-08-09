import Header from "./component/header";
import LogIn from './component/logIn';
import ArtistSearch from "./component/artistSearch";  
import BrowsingArtist from './component/browsingArtist'; 
import BrowsingArtistAlbum from './component/browsingArtistAlbum'; 
import { useState } from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css'

export default function App() {
  const [searchKey, setSearchKey] = useState('')
  const [artistName, setArtistName] = useState('')
 
  function setSearchKeyy(key){
    setSearchKey(key);
  }

  function setArtistNamee(artistName){
    setArtistName(artistName);
  }
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <LogIn />}/>
        <Route path="/artistSearch" element={ <ArtistSearch searchKey={searchKey} setSearchKeyy={setSearchKeyy}/>}/>
        <Route path="/browsingArtist" element={ <BrowsingArtist searchKey={searchKey} setSearchKeyy={setSearchKeyy} artistName={artistName} setArtistNamee={setArtistNamee}/>}/>
        <Route path="/browsingArtistAlbum" element={ <BrowsingArtistAlbum artistName={artistName} setArtistNamee={setArtistNamee}/>}/>
      </Routes>
    </BrowserRouter>
  );
}


