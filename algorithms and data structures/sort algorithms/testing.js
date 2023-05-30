function getDigit(number, n) {
  return Math.floor((number / Math.pow(10, n - 1)) % 10);
}

