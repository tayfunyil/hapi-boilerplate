const handleSayHello = async (request, h) => {
    try {
        const res = {msg: 'Hello, World!'}
        return h.response(res).code(200);
    } catch (err) {
        console.log(err);
    }
};


module.exports = handleSayHello;
