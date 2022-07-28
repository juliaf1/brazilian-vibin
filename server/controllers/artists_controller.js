const axios = require('axios');
const { sequelize } = require('../config.js');
const { getArtist, getTracks } = require('../services/spotify.js');

const random = async (req, res) => {
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
            const artistRes = await getArtist(id);
            if (artistRes.success) {
                artist.info = artistRes.data;
            } else {
                console.log(artistRes.data, artistRes.status);
            };

            const trackRes = await getTracks(id);
            if (trackRes.success) {
                artist.track = trackRes.data.sample();
            } else {
                console.log(res.data, trackRes.status);
            };
            
            artists.push(artist);
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