const { Artist } = require('../models/artist.js');
const { getArtist, listArtists, getTracks } = require('../services/spotify.js');

const randomPlaylist = async (req, res) => {
    const maxSize = req.query.maxSize || 5;
    const ids = await Artist.findAll('spotify_id');
    
    let artists = [];
    let randomIds = [];

    while (randomIds.length < maxSize) {
        let id = ids.sample().spotify_id;
        let uniq = randomIds.indexOf(id) === -1;
        while (!uniq) {
            id = ids.sample().spotify_id;
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
                console.log(trackRes.data, trackRes.status);
            };
            
            artists.push(artist);
        } catch (error) {
            console.log('Error finding artist and track', error);
        };
    };

    res.status(200).send(artists);
};

Array.prototype.sample = function() {
    return this[Math.floor(Math.random()*this.length)];
};

module.exports = {
    randomPlaylist,
};