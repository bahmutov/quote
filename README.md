# quote

> Safe quoting a given string without adding duplicate quotes

[![NPM info][nodei.co]](https://npmjs.org/package/quote)

[![Build status][ci-image]][ci-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][quote-devdependencies-image] ][quote-devdependencies-url]

Install (node)

    npm i quote --save

Use

    var quote = require('quote');
    quote('foo'); // "foo"
    quote('"foo"'); // "foo"
    quote(quote('foo')); // "foo"

## Small print

Author: Gleb Bahmutov &copy; 2014
[@bahmutov](https://twitter.com/bahmutov) [glebbahmutov.com](http://glebbahmutov.com)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet / open issue on Github

[ci-image]: https://travis-ci.org/bahmutov/quote.png?branch=master
[ci-url]: https://travis-ci.org/bahmutov/quote
[nodei.co]: https://nodei.co/npm/quote.png?downloads=true
[dependencies-image]: https://david-dm.org/bahmutov/quote.png
[dependencies-url]: https://david-dm.org/bahmutov/quote
[quote-devdependencies-image]: https://david-dm.org/bahmutov/quote/dev-status.png
[quote-devdependencies-url]: https://david-dm.org/bahmutov/quote#info=devDependencies
