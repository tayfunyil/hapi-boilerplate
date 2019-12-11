const handleIndex = async (request, h) => {
    try {
        const res = {msg: 'Hello, Index!'}
        return h.response(res).code(200);
    } catch (err) {
        console.log(err);
    }
};


module.exports = handleIndex;
