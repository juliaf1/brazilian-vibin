const { sequelize, secrets } = require('../config.js');
const axios = require('axios');

const spotifyUrl = 'https://api.spotify.com/v1';

tokenHeaders = {
    headers: {
        'Authorization': `Bearer ${secrets.SPOTIFY_TOKEN}`,
    },
};

const randomTrack = async (req, res) => {
    const ids = await sequelize.query(`select spotify_id from artists`);
    const id = ids[0].sample().spotify_id;

    try {
        const tracksRes = await axios.get(`${spotifyUrl}/artists/${id}/top-tracks?market=BR`, tokenHeaders);
        res.status(200).send(tracksRes.data.tracks.sample());
    } catch {
        console.log('Error finding random track');
        res.sendStatus(400);
    };
};

module.exports = {
    randomTrack,
};