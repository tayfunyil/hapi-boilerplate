'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

const Pack = require('./package');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const swaggerOptions = {
        info: {
            title: 'Test API Documentation',
            version: Pack.version,
        },
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        },
        {
            plugin: require('hapi-router'),
            options: {
                routes: 'src/**/*.route.js' // uses glob to include files
            }
        },
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
