const { sequelize } = require('../config.js');

class Playlist {
    constructor(name = 'Awesome Playlist', user_id = null) {
        this.name = name;
        this.user_id = user_id;
    };

    async save() {
        try {
            const res = await sequelize.query(`
            insert into playlists (name, user_id)
            values ('${this.name}', '${this.user_id}');
            `);
            return { name: this.name, user_id: this.user_id };
        } catch (error) {
            console.log(error);
            return [];
        };
    };
};

Playlist.findAllTracks = async (playlist_id) => {
    try {
        const res = await sequelize.query(`
            select * from playlist_tracks
            join playlists on playlist_tracks.playlist_id = '${playlist_id}';
        `);
        return res[0];
    } catch (error) {
        console.log(error);
        return [];
    };
};

module.exports = {
    Playlist,
};