const axios = require('axios');
const { sequelize } = require('../config.js');
const { getArtist } = require('../services/spotify.js');

const random = async (req, res) => {
    // const { genres } = req.query;
    const maxSize = req.query.maxSize || 5;

    const ids = await sequelize.query(`select spotify_id from artists`);
    
    let artists = [];
    let randomIds = [];

    // const headers = await authorizationHeaders();

    while (randomIds.length < maxSize) {
        let id = ids[0].sample().spotify_id;
        let uniq = randomIds.indexOf(id) === -1;
        while (!uniq) {
            id = ids[0].sample().spotify_id;
        };

        randomIds.push(id);
        let artist = {};

        try {
            const tracksRes = await getArtist(id);
            console.log(tracksRes);
            // const artistRes = await axios.get(`${spotifyUrl}/artists/${id}`, headers)
            // artist.track = tracksRes.data.tracks.sample();
            // artist.info = artistRes.data;
            // artists.push(artist);
        } catch {
            console.log('Error finding artist and track');
        };
    };

    res.status(200).send(artists);
};

Array.prototype.sample = function() {
    return this[Math.floor(Math.random()*this.length)];
};

module.exports = {
    random,
};