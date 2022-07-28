const { Artist } = require('../models/artist.js');
const { listArtists } = require('../services/spotify.js');

const list = async (req, res) => {
    const ids = await Artist.findAll('spotify_id');
    try {
        const res = await listArtists(ids.map(id => id.spotify_id));
        res.status(200).send(res);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    };
};

module.exports = {
    list,
};