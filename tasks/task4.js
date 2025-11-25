function findMax(numbers) {
  if (numbers.length === 0) return undefined; // Перевірка на порожній масив
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

module.exports = findMax;