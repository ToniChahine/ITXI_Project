import React from 'react';
import axios from 'axios';
import qs from 'qs';
import '../css/logIn.css';

export default function SpotifyAuth ({ onLoginSuccess }){
  
  
  async function getAuth()  {
    const clientId = '8657bd74b7bc48db850c74047b539989';
    const clientSecret = '4eca8788ecd74f4e89d14803e72e4dec';
  
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: clientId,
        password: clientSecret,
      },
    };
    const data = {
      grant_type: 'client_credentials',
    };

    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      );
      
      localStorage.setItem('token',response.data.access_token)
      
      if (response.data.access_token) {
        onLoginSuccess(response.data.access_token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='divAuthContainer' style={{ minHeight: '80vh' }}>
      <div className='divAuthSearch' onClick={getAuth}>
        <button className='divAuthbtn'> Login </button>
        <img className='divAuthLogo' src="./photo/spotify-logo.jpeg" alt="spotify-logo" />
      </div>
    </div>
  );
};

