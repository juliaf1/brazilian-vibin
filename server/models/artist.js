const { sequelize } = require('../config.js');

class Artist {
    constructor(name, spotify_id){
        this.name = name;
        this.spotify_id = spotify_id;
    };
  
    async save() {
        sequelize.query(`
            insert into artists (name, spotify_id)
            values ('${this.name}', '${this.spotify_id}')
        `)
        .then(() => {
            return { success: true };
        })
        .catch(error => {
            return { error };
        });
    }
};

module_exports = {
    Artist,
}