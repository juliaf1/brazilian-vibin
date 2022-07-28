const axios = require('axios');
const { Artist } = require('../models/artist.js');
const { getTracks } = require('../services/spotify.js');

const randomTrack = async (req, res) => {
    const ids = await Artist.findAll('spotify_id');
    const id = ids.sample().spotify_id;

    try {
        const trackRes = await getTracks(id);
        if (trackRes.success) {
            res.status(200).send(trackRes.data.sample());
        } else {
            console.log(trackRes.data, trackRes.status);
        };
    } catch (error) {
        console.log('Error finding random track', error);
        res.sendStatus(400);
    };
};

module.exports = {
    randomTrack,
};