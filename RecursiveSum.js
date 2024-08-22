const ArraySum = (numbers) => {
  if (numbers.length === 0) return 0;
  const [first, ...rest] = numbers;
  return first + ArraySum(rest);
};
