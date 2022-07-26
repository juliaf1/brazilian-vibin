const path = require('path');
const express = require('express');
const cors = require('cors');

const { secrets } = require('./config.js');
const { seed } = require('./seed.js');
const { random } = require('./controllers/artists_controller');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

// DEV - SEED
app.post('/seed', seed);

app.get('/random', random);

const port = secrets.PORT || 3000;
app.listen(port, () => console.log(`up on ${port}`));