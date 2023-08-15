import Header from "./component/header";
import LogIn from './component/logIn';
import BrowsingArtist from './component/browsingArtist'; 
import BrowsingArtistAlbum from './component/browsingArtistAlbum'; 
import { useState } from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css'

export default function App() {
  const [searchKey, setSearchKey] = useState('')
 
  function setSearchKeyy(key){
    setSearchKey(key);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <LogIn />}/>
        <Route path="/browsingArtist" element={ <BrowsingArtist searchKey={searchKey} setSearchKeyy={setSearchKeyy} />}/>
        <Route path="/browsingArtistAlbum" element={ <BrowsingArtistAlbum />}/>
      </Routes>
    </BrowserRouter>
  );
}


