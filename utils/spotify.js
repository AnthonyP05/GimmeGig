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

// Make API request
const getSpotifyData = async () => {
	const accessToken = await getAccessToken();
	const apiUrl = 'https://api.spotify.com/v1/me';
	const headers = {
		'Authorization': 'Bearer ' + accessToken,
	};

	try {
		const response = await axios.get(apiUrl, { headers });
		console.log(response.data);
	} catch (error) {
		console.error('Error making API request:', error);
	}
};

getSpotifyData();