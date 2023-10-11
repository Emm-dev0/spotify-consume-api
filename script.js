
import config from "./config/config.js"; //importing the config file
const contents = document.getElementById("contents");

console.log( "spotify songs");

const clientId = config.clientId //'YOUR_SPOTIFY_CLIENT_ID';
const clientSecret = config.clientSecret //'YOUR_SPOTIFY_CLIENT_SECRET';
const accessToken = config.accessToken // Obtain this through Spotify authentication

//the artists link
const artistLink = "5xLSa7l4IV1gsQfhAMvl0U?si=3BSmQHBSRuSsIJHCs8v7zw"

// Base64 encode the client ID and client secret
const base64Credentials = btoa(`${clientId}:${clientSecret}`);

// Spotify API endpoint for getting a user's playlists
const apiUrl = 'https://api.spotify.com/v1/artists/' + `${artistLink}`;

// Fetch options, including headers and authentication
const fetchOptions = {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

// Send the Fetch request
fetch(apiUrl, fetchOptions)
  .then(response => response.json())
  .then(data => {
    console.log('Data from Spotify API:', data);
    displayData(data);
    // Handle the data as needed
  })
  .catch(error => console.error('Error:', error));


function displayData(data) {
    contents.innerHTML = "";

    data.forEach(item => {
      const listItem = document.createElement('div');
      listItem.textContent = item.name;
      contents.appendChild(listItem);
    }); }