var util = {
  // removes 0x
  fromHex: function(str) {
    if (str.substr(0, 2) === '0x') return str.substr(2);
    return str;
  },
  // adds 0x
  toHex: function(str) {
    return '0x' + str;
  },
  pad: function(str) {
    return str.length % 2 === 0 ? str : '0' + str;
  }
};

module.exports = util;