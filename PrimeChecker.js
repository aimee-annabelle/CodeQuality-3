const primeChecker = (number) => {
  if (!number) return "Please input a number";
  if (number <= 1) return false;
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};
