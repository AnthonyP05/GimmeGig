const axios = require('axios');
const qs = require('qs');

// Replace with your own Client ID and Client Secret
const clientId = '61cd891f76a84876a029355e2496eaa1';
const clientSecret = '87144edc21524b498b76b31d873408b0';

// Get access token
const getAccessToken = async () => {
	const tokenUrl = 'https://accounts.spotify.com/api/token';
	const data = qs.stringify({ grant_type: 'client_credentials' });
	const headers = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
	};

	try {
		const response = await axios.post(tokenUrl, data, { headers });
		return response.data.access_token;
	} catch (error) {
		console.error('Error getting access token:', error);
	}
};

// Extract artist ID from Spotify account link
const getArtistIdFromLink = (spotifyLink) => {
	const regex = /https:\/\/open\.spotify\.com\/artist\/([a-zA-Z0-9]+)/;
	const match = spotifyLink.match(regex);
	return match ? match[1] : null;
};

// Get top tracks by artist ID
const getTopTracks = async (artistId, accessToken) => {
	const topTracksUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`;
	const headers = {
		'Authorization': 'Bearer ' + accessToken,
	};

	try {
		const response = await axios.get(topTracksUrl, { headers });
		return response.data.tracks;
	} catch (error) {
		console.error('Error getting top tracks:', error);
	}
};

// Make API request
const getSpotifyData = async (spotifyLink) => {
	const accessToken = await getAccessToken();
	const artistId = getArtistIdFromLink(spotifyLink);
	if (!artistId) {
		console.error('Invalid Spotify link');
		return [];
	}

	const topTracks = await getTopTracks(artistId, accessToken);
	if (!topTracks || topTracks.length === 0) {
		return [];
	}

	return topTracks;
};

// Example usage
// getSpotifyData('https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY'); // Example artist link