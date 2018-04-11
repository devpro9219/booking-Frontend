'use strict';

const app = require('./app');
const config = require('./app/config/config');

app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}!`);
});
