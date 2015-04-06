var quote = require('./quote');

module.exports = {
  string: quote({ quotes: '"' }),
  code: quote({ quotes: '`' }),
  em: quote({ quotes: '*' }),
  bold: quote({ quotes: '**' })
};
