const axios = require('axios');
const { sequelize } = require('../config.js');
const { authorizationHeaders } = require('../services/spotify.js');

const spotifyUrl = 'https://api.spotify.com/v1';

const randomTrack = async (req, res) => {
    const ids = await sequelize.query(`select spotify_id from artists`);
    const id = ids[0].sample().spotify_id;
    const headers = await authorizationHeaders();

    try {
        const tracksRes = await axios.get(`${spotifyUrl}/artists/${id}/top-tracks?market=BR`, headers);
        res.status(200).send(tracksRes.data.tracks.sample());
    } catch {
        console.log('Error finding random track');
        res.sendStatus(400);
    };
};

module.exports = {
    randomTrack,
};