const test = require('node:test');
const assert = require('node:assert');
const greet = require('./index');

test('greet function returns correct message', () => {
    assert.strictEqual(greet('Prince'), 'Hello, Prince!');
});