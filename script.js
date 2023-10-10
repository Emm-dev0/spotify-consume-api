console.log( "spotify songs");

const clientId = "6b6abbf6057946979e4d2464e2d755cc" //'YOUR_SPOTIFY_CLIENT_ID';
const clientSecret = "5885a0b91ec44da39acb8788d04c1b21" //'YOUR_SPOTIFY_CLIENT_SECRET';
const accessToken = "BQAL3xgxnLqxPRpVvQZraLJkVYGJ6ZxhDYQ9cv-gAorpkXecf9cypMfSSiZS6rb9LABZs7aowlVMgKQxhNQTrOVGrAKrq9Mfzb3NOqOie8I_VDu_gzQ"; // Obtain this through Spotify authentication
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
    // Handle the data as needed
  })
  .catch(error => console.error('Error:', error));
