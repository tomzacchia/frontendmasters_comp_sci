/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // code goes here
  let hasSwapBeenMade = true;

  // 1. loop while isSorted is false
  do {
    hasSwapBeenMade = false;

    // 2. compare two index values
    for (let i = 0; i < nums.length; i++) {
      let isEndOfArray = i === nums.length - 1;
      if (isEndOfArray) break;

      let current = nums[i];
      let next = nums[i + 1];

      if (current > next) {
        nums[i] = next;
        nums[i + 1] = current;
        hasSwapBeenMade = true;
      }
    }
  } while (hasSwapBeenMade);

  // 3. return sorted array
  return nums;
}

// unit tests
// do not modify the below code
// add test.skip to skip test
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  console.log(sortedNums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
