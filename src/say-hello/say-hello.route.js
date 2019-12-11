const handleSayHello = require('./handle-say-hello');

module.exports = {
    method: 'GET',
    path: '/hello',
    config: {
        handler: handleSayHello,
        tags: ['api'],
        cors: true,
    },
};
