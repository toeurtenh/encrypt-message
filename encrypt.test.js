const encrypt = require('./encrypt');

test('Encryption the word homeflow is krphiorz', () => {
  expect(encrypt('homeflow', 3)).toBe('krphiorz');
});