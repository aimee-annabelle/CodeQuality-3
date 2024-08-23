const findArrayDepth = (array) => {
  let maxLevel = 0;
  function findDepth(arr, level) {
    if (Array.isArray(arr)) {
      maxLevel = Math.max(maxLevel, level);
      arr.forEach((element) => findDepth(element, level + 1));
    }
  }
  findDepth(array, 0);
  return maxLevel;
}

const flattenArray = (array) => {
    const arrayDepth = findArrayDepth(array);
    return array.flat(arrayDepth);
}
