/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

// return one sorted array
const mergeSortedSubarrays = (left, right) => {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  // left or right could be empty, in which case we already know that sortedArray
  // will contain all numbers smaller than unempty left or right
  return sortedArray.concat(left, right);
};

const mergeSort = (nums) => {
  // code goes here

  // base case: array of length 1  or 0
  if (nums.length === 1 || nums.length === 0) return nums;

  // split nums in half
  const midway = Math.floor(nums.length / 2);
  const leftSubarray = nums.slice(0, midway);
  const rightSubarray = nums.slice(midway);

  const sortedLeft = mergeSort(leftSubarray);
  const sortedRight = mergeSort(rightSubarray);

  // combine & sort both halves after calling mergeSort
  // return result
  return mergeSortedSubarrays(sortedLeft, sortedRight);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
