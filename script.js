// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  // your code here
  if (array.length === 0) {
    return 0;
  }
  const average =
    array.reduce(function (acc, cur, i, arr) {
      return acc + cur;
    }, 0) / array.length;
  return average;
}

console.log(find_average([1, 1, 1]));
console.log(find_average([1, 2, 3]));
console.log(find_average([1, 2, 3, 4]));
console.log(find_average([]));