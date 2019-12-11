const fetch = require('node-fetch');
const expect = require('expect')

test('index route returning "Hello, Index!"', () => {
    fetch('localhost:3000')
        .then(response => response.json())
        .then(data => {
            expect(data.msg).toBe('Hello, Index!')
        })
});
