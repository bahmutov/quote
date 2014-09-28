var quotes = '"';

function quoteString(str) {
  if (str === '') {
    return quotes + quotes;
  }
  if (str[0] !== quotes) {
    str = quotes + str;
  }
  if (str[str.length - 1] !== quotes) {
    str += quotes;
  }
  return str;
}

function quote(str) {
  if (typeof str === 'string') {
    return quoteString(str);
  }
  return str;
}

module.exports = quote;
