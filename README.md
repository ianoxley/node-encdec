encdec
======
encdec is a node module that helps you baseXX encode and decode.

It defaults to using base58 encoding, but can easily be adapted for 
base16, base32, base64 - or any other base - by passing the alphabet
you want to use to the `create()` method.

Installation
------------
encdec can be installed from npm via:

    npm install encdec

or you can clone a copy from GitHub:

    git clone git://github.com/ianoxley/node-encdec.git
    cd node-encdec && npm install

Usage
-----

	  var base58 = require('encdec').create() // defaults to base58
    base58.encode(1000);
    base58.decode('if');
    
    // base32 encoding
    var base32 = require('encdec').create('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567');
    base32.encode(1000000);
    base32.decode('6QSA');

