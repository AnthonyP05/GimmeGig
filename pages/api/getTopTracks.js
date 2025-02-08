import axios from 'axios';
import qs from 'qs';
import NodeCache from 'node-cache';

const clientId = '61cd891f76a84876a029355e2496eaa1';
const clientSecret = '87144edc21524b498b76b31d873408b0';
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

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

const getArtistIdFromLink = (spotifyLink) => {
	const regex = /https:\/\/open\.spotify\.com\/artist\/([a-zA-Z0-9]+)/;
	const match = spotifyLink.match(regex);
	return match ? match[1] : null;
};

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

export default async (req, res) => {
	const { spotifyLink } = req.body;
	const artistId = getArtistIdFromLink(spotifyLink);
	if (!artistId) {
		return res.status(400).json({ error: 'Invalid Spotify link' });
	}

	const cacheKey = `topTracks_${artistId}`;
	const cachedTracks = cache.get(cacheKey);
	if (cachedTracks) {
		return res.status(200).json({ tracks: cachedTracks });
	}

	const accessToken = await getAccessToken();
	const topTracks = await getTopTracks(artistId, accessToken);
	if (!topTracks || topTracks.length === 0) {
		return res.status(200).json({ tracks: [] });
	}

	cache.set(cacheKey, topTracks);
	return res.status(200).json({ tracks: topTracks });
};
