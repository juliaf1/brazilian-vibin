const axios = require('axios');
const qs = require('qs');
const { secrets } = require('../config.js');

const client_id = secrets.SPOTIFY_API_ID;
const client_secret = secrets.SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const spotify_url = 'https://api.spotify.com/v1';
const token_url = 'https://accounts.spotify.com/api/token';

let token = null;
let token_requested_at = null;

const getAuth = async () => {
  // Reference: https://ritvikbiswas.medium.com/connecting-to-the-spotify-api-using-node-js-and-axios-client-credentials-flow-c769e2bee818
  try {
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    });

    // console.log(response.data.access_token);
    return response.data.access_token;
  } catch(error) {
    console.log(error);
  };
};

const authorizationHeaders = async () => {
    if (!token || token_requested_at < new Date()) {
        token = await getAuth();
        token_requested_at = new Date();
    };
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    };
};

const getArtist = async (id) => {
    const headers = await authorizationHeaders();
    try {
        const res = await axios.get(`${spotify_url}/artists/${id}`, headers);
        return { data: res.data, success: true };
    } catch (error) {
        return { data: error.response.data, status: error.response.status };
    };
};

const getTracks = async (artist_id) => {
    const headers = await authorizationHeaders();
    try {
        const res = await axios.get(`${spotify_url}/artists/${artist_id}/top-tracks?market=BR`, headers);
        return { data: res.data.tracks, success: true };
    } catch (error) {
        return { data: error.response.data, status: error.response.status };
    };
};

module.exports = {
    getArtist,
    getTracks
};