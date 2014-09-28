function quoteString(options, str) {
  if (str === '') {
    return options.quotes + options.quotes;
  }
  if (str[0] !== options.quotes) {
    str = options.quotes + str;
  }
  if (str[str.length - 1] !== options.quotes) {
    str += options.quotes;
  }
  return str;
}

function quoteOptions(options, str) {
  if (arguments.length === 1) {
    str = options;
    options = { quotes: '"' };
  }

  if (typeof str === 'string') {
    return quoteString(options, str);
  }
  return str;
}

function quote(str) {
  if (typeof str === 'object') {
    return quoteOptions.bind(null, str);
  }
  return quoteOptions(str);
}

module.exports = quote;
