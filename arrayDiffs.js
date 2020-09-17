//ARRAY DIFFERENCES

// Pseudocode

// I need to create an empty array, that later I will push unique integers
// "let empty array"

// I need to push all unique integers into the new array
// I need to check for all unique integers
// I need to check if any of the elements in arr1 are in arr 2, and vice versa

// "if the value of each index in arr 1 equals the value of any index in arr2, do NOT push into the output"
// "if the value of any index in arr 1 does not equal the value of any index in arr 2, push into the output"
// "if the value of each index in arr 2 equals the value of any index in arr1, do NOT push into the output"
// "if the value of any index in arr 2 does not equal the value of any index in arr1, push into the output"

const arrayDiffs = (arr1, arr2) => {
  let uniqueNums = [];

  for (let i = 0; i < arr1.length; i += 1) {
    if (!arr2.includes(arr1[i])) {
      uniqueNums.push(arr1[i])
    }
  }

  for (let i = 0; i < arr2.length; i += 1) {
    if (!arr1.includes(arr2[i])) {
      uniqueNums.push(arr2[i])
    }
  }

  return uniqueNums;
};

const ternaryDiffs = (arr1, arr2) => {
  let uniqueNums = [];

  arr1.forEach((num) => {
    arr2.includes(num) ? null : uniqueNums.push(num);
  })

  arr2.forEach((num) => {
    arr1.includes(num) ? null : uniqueNums.push(num);
  })

  return uniqueNums;
};

// We're already checking if the values of arr1 and arr2 are unique... 
// Isn't there a more efficient way?

const methodChainDiffs = (arr1, arr2) => {
  return uniqueNums = arr1
    .filter((num) => !arr2.includes(num))
    .concat(arr2.filter((num) => !arr1.includes(num)))

  // Alternatively: 
  // let uniqueNums = [];
  // let uniqueNumsPart1 = arr1.filter((num) => !arr2.includes(num))
  // let uniqueNumsPart2 = arr2.filter((num) => !arr1.includes(num))
  // return uniqueNums = [...uniqueNumsPart1, ...uniqueNumsPart2]

};

console.log(arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]));

module.exports = {
  arrayDiffs,
};