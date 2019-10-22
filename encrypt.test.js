const encrypt = require('./encrypt');

test('Encryption the word homeflow is krphiorz', () => {
  console.log(encrypt('homeflow', 3));
});