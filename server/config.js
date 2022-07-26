require('dotenv').config();
const { PORT, DATABASE_URL, ADMIN_PASS, SPOTIFY_TOKEN } = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        },
    },
});

module.exports = {
    sequelize,
    secrets: { PORT, ADMIN_PASS, SPOTIFY_TOKEN }
};