// nodeunit tests for encdec.js
var encdec = require('../lib/encdec');

exports.group = {
  setUp: function(callback) {
    this.base58 = encdec.create();
    callback();
  },

  testBase58Encode: function(test) {
    test.expect(4);

    test.equals(this.base58.encode(0), '1');
    test.equals(this.base58.encode(-1), '');
    test.equals(this.base58.encode(10002343), 'Tgmc');
    test.equals(this.base58.encode(1000), 'if');

    test.done();
  },

  testBase58Decode: function(test) {
    test.expect(5);

    test.equals(this.base58.decode('Tgmc'), 10002343);
    test.equals(this.base58.decode('if'), 1000);
    test.equals(this.base58.decode('1'), 0);
    test.equals(this.base58.decode(''), -1);

    test.equals(this.base58.decode({}), -1);

    test.done();
  },

  tearDown: function(callback) {
    callback();
  }
};
