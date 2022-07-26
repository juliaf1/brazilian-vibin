const { sequelize, secrets } = require('../config.js');
const axios = require('axios');

const spotifyUrl = 'https://api.spotify.com/v1';

tokenHeaders = {
    headers: {
        'Authorization': `Bearer ${secrets.SPOTIFY_TOKEN}`,
    },
};

const random = async (req, res) => {
    const { genres } = req.query;
    const maxSize = req.query.maxSize || 5;

    const ids = await sequelize.query(`select spotify_id from artists`);
    
    let artists = [];
    let randomIds = [];

    while (randomIds.length < maxSize) {
        let id = ids[0].sample().spotify_id;
        let uniq = randomIds.indexOf(id) === -1;
        while (!uniq) {
            id = ids[0].sample().spotify_id;
        };

        randomIds.push(id);
        let artist = {};

        try {
            const tracksRes = await axios.get(`${spotifyUrl}/artists/${id}/top-tracks?market=BR`, tokenHeaders);
            const artistRes = await axios.get(`${spotifyUrl}/artists/${id}`, tokenHeaders)
            artist.track = tracksRes.data.tracks.sample();
            artist.info = artistRes.data;
        } catch {
            console.log('Error finding artist and track');
        };
        
        artists.push(artist);
    };

    res.status(200).send(artists);
};

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
};

module.exports = {
    random,
};