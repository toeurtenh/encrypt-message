var caesarShift = function(str, key) {

  // Wrap the key
  if (key < 0)
    return caesarShift(str, key + 26);

  var output = '';

  // Go through each character
  for (var i = 0; i < str.length; i ++) {

    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {

      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode(((code - 65 + key) % 26) + 65);

      // Lowercase letters
      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode(((code - 97 + key) % 26) + 97);

    }

    output += c;

  }

  return output;

};

module.exports = caesarShift;