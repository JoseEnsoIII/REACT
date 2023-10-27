// myModule.test.js

const myModule = require('./myModule');

test('add function adds two numbers', () => {
  expect(myModule.add(1, 2)).toBe(3);
});
