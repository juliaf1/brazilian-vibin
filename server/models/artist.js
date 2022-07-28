const { sequelize } = require('../config.js');

class Artist {
    constructor(name, spotify_id) {
        this.name = name;
        this.spotify_id = spotify_id;
    };

    async save() {
        try {
            const res = await sequelize.query(`
            insert into artists (name, spotify_id)
            values ('${this.name}', '${this.spotify_id}');
            `);
            return { name: this.name, spotify_id: this.spotify_id };
        } catch (error) {
            console.log(error);
            return [];
        };
    };
};

Artist.findAll = async (param = '*') => {
    try {
        const res = await sequelize.query(`select ${param} from artists;`);
        return res[0];
    } catch (error) {
        console.log(error);
        return [];
    };
};

module.exports = {
    Artist,
};