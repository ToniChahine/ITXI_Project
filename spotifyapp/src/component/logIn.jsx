import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpotifyAuth from './spotifyAuth.jsx';

export default function LogIn() {
  const navigate = useNavigate();

  function handleLoginSuccess () {
    navigate('./artistSearch');
  };

  return (
    <div>
      <SpotifyAuth onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}
