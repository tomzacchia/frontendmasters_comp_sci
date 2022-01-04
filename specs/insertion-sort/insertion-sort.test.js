/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

// video reference: https://www.youtube.com/watch?v=OGzPmgsI-pQ&ab_channel=GeeksforGeeks
function insertionSort(nums) {
  // code goes here
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    let currentNumIndex;

    // shift all bigger numbers to the right
    for (currentNumIndex = i - 1; currentNumIndex >= 0; currentNumIndex--) {
      if (nums[currentNumIndex] < numberToInsert) break;

      nums[currentNumIndex + 1] = nums[currentNumIndex];
    }

    // insert numberToInsert
    nums[currentNumIndex + 1] = numberToInsert;
  }

  return nums;
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  console.log(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
