function reverseWithoutNumbers(str) {
  let result = "";
  const digits = "0123456789";
  for (let i = str.length - 1; i >= 0; i--) {
    if (!digits.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

module.exports = reverseWithoutNumbers;