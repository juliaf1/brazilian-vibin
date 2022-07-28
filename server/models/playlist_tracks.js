const { sequelize } = require('../config.js');

class PlaylistTracks {
    constructor(playlist_id, spotify_track_id, spotify_artist_id) {
        this.playlist_id = playlist_id;
        this.spotify_track_id = spotify_track_id;
        this.spotify_artist_id = spotify_artist_id;
    };

    async save() {
        try {
            const res = await sequelize.query(`
            insert into playlist_tracks (playlist_id, spotify_track_id, spotify_artist_id)
            values ('${this.playlist_id}', '${this.spotify_track_id}', '${spotify_artist_id}');
            `);
            return {
                playlist_id: this.playlist_id,
                spotify_track_id: this.spotify_track_id,
                spotify_artist_id: this.spotify_artist_id
            };
        } catch (error) {
            console.log(error);
            return [];
        };
    };
};

module.exports = {
    PlaylistTracks,
};