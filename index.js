'use strict';

const Hapi = require('@hapi/hapi');
const postRoute = require('./routes/postRoutes.js');
const MySQL = require('mysql');
const server = new Hapi.Server();

const connection = MySQL.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'apitest'
});

const init = async () => {

    const server = new Hapi.Server({
        port: 3000,
        host: 'localhost'
    });

    connection.connect();



    postRoute(server, connection)

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
}

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();