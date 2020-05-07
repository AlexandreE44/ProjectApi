'use strict';

const Hapi = require('@hapi/hapi');
const MySQL = require('mysql');
const server = new Hapi.Server();

const connection = MySQL.createConnection({
    host: 'localhost',
    port: 8888,
    user: 'root',
    password: 'root',
    database: 'vue'
});

const init = async () => {

    const server = new Hapi.Server({
        port: 3000,
        host: 'localhost'
    });

    connection.connect();

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, h) => {

            return 'Hello World!';
        }
    });

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