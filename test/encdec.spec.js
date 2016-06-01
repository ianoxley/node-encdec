// encdec.spec.js

var assert = require('chai').assert;

describe('encdec', function() {
    'use strict';
    var encdec;
    var base58;

    beforeEach(function() {
        encdec = require('../lib/encdec');
        base58 = encdec.create();
    });

    describe('encode', function() {
        var tests = [
            { args: [0], expected: '1' },
            { args: [-1], expected: '' },
            { args: [10002343], expected: 'Tgmc' },
            { args: [1000], expected: 'if' }
        ];

        tests.forEach(function(test) {
            it('base58 encodes ' + test.args[0] + ' as ' + test.expected, function() {
                var result = base58.encode.apply(null, test.args);
                assert.equal(result, test.expected);
            });
        });
    });

    describe('decode', function() {
        var tests = [
            { args: ['Tgmc'], expected: 10002343 },
            { args: ['if'], expected: 1000 },
            { args: ['1'], expected: 0 },
            { args: [''], expected: -1 },
            { args: [{}], expected: -1 }
        ];

        tests.forEach(function(test) {
            it('base58 decodes ' + test.args[0] + ' as ' + test.expected, function() {
                var result = base58.decode.apply(null, test.args);
                assert.equal(result, test.expected);
            });
        });
    });
});
