function replaceVowels(str) {
  const vowels = "aeiouyAEIOUY";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += "*";
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = replaceVowels;