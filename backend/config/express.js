const express = require('express');
const config = require('config');
const routes = require('../api/routes')


module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || config.get('server.port'));

    app.use(express.json());
    app.use(routes);
    
    return app;
}