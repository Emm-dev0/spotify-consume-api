console.log( "spotify songs");

const clientId = "" //'YOUR_SPOTIFY_CLIENT_ID';
const clientSecret = "" //'YOUR_SPOTIFY_CLIENT_SECRET';
const accessToken = ""; // Obtain this through Spotify authentication

// Base64 encode the client ID and client secret
const base64Credentials = btoa(`${clientId}:${clientSecret}`);

// Spotify API endpoint for getting a user's playlists
const apiUrl = 'https://api.spotify.com/v1/taylor/playlists';

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
    // Handle the data as needed
  })
  .catch(error => console.error('Error:', error));
