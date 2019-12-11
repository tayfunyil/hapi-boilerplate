const handleIndex = require('./handle-index');

module.exports = {
    method: 'GET',
    path: '/',
    config: {
        handler: handleIndex,
        tags: ['api'],
        cors: true,
    },
};
