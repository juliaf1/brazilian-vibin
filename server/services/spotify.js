const axios = require('axios');
const qs = require('qs');
const { secrets } = require('../config.js');

const client_id = secrets.SPOTIFY_API_ID;
const client_secret = secrets.SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const getAuth = async () => {
  // Reference: https://ritvikbiswas.medium.com/connecting-to-the-spotify-api-using-node-js-and-axios-client-credentials-flow-c769e2bee818
  try {
    const token_url = 'https://accounts.spotify.com/api/token';
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
    const token = await getAuth();
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    };
};

module.exports = {
    authorizationHeaders
};